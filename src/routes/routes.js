const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'test',
  password : 'Europ@123!',
  database : 'opticx',
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// Creating a GET route that returns data from the 'users' table.
app.get('/user_info', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
      if(err) {
        console.log(err)
        return
      }
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM user_info', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.post('/login', function (req, res) {
  // Connecting to the database.

  console.log(req.body.userName);
  console.log(req.body.userPassword);

  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query('SELECT * FROM user_info WHERE user = "' + req.body.userName + '"', function (error, results, fields) {
    //console.log('SELECT * FROM user_info WHERE user = "' + req.body.userName.userName + '"')
    // If some error occurs, we throw an error.
  
    if (error) throw error;
    if(results.length==0)
    {
      returnstatus = "LOGIN FAILED"
      res.json({status:returnstatus,role:null})
      return
    }
    else if(req.body.userPassword == results[0].password)
    {
      returnstatus = "LOGIN SUCCESS"
    }
    else
    {
      returnstatus = "LOGIN FAILED"
    }
    // Getting the 'response' from the database and sending it to our route. This is were the data is.

    console.log(returnstatus)
    res.json({status: returnstatus,role:results[0].role,name:results[0].name,username:results[0].user})
    return
  });


});
});

app.post('/register', function (req, res){
  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }
  let user = req.body.userName;
  let password = req.body.password;
  let email = req.body.email;
  let address = req.body.address;
  let phone = req.body.phone;
  let name = req.body.name;
  // Executing the MySQL query (select all data from the 'users' table).
  console.log(address)
  connection.query('SELECT * FROM user_info WHERE user = "' + user + '"', function (error, results, fields) {
    //console.log('SELECT * FROM user_info WHERE user = "' + req.body.user + '"')
    // If some error occurs, we throw an error.
    if (error) throw error;
    
    if(results.length != 0)
    {
      returnstatus = "Error: user already exists"
      res.json({status:returnstatus})
      return
    }
    else
    {  
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      returnstatus = "User successfully registered"
      connection.query('INSERT INTO user_info (user,password,name,street,city,state,zipcode,phone,email,role) VALUES (\''  + user + '\',\'' + password + '\',\'' + name + '\',\'' + street + '\',\''+ city  + '\',\'' + state + '\',\'' + zipcode + '\',\'' + phone + '\',\'' + email+ '\',\'' + null+ '\')',function (error, results, fields) {
      //console.log('SELECT * FROM user_info WHERE user = "' + req.body.user + '"')
      // If some error occurs, we throw an error.
      //console.log(String.format('INSERT INTO user_info VALUES (%s,%s,%s,%s)',req.body.user,req.body.password,req.body.name,req.body.address))
      if (error) throw error;
      res.json({status:returnstatus})
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      
  });
  
}
});
});
});

app.get('/userhome', function (req, res) {
  // Connecting to the database.
  
  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query('SELECT itemID,itemname,imageurl,price,description FROM items where circulation =\"true\"', function (error, results, fields) {
    //console.log('SELECT * FROM user_info WHERE user = "' + req.body.userName.userName + '"')
    // If some error occurs, we throw an error.
  
    if (error) throw error;
    //console.log(results[0])
  
    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    
    console.log("GOT " + results.length + " ITEMS")
    res.send({reply:results})

  });


});
});

app.post('/viewitems', function (req, res) {
  // Connecting to the database.
  
  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }
    console.log(req.body.userName)
  connection.query('SELECT clinicname FROM user_info WHERE user = \"' + req.body.userName + "\"", function (error,userresult, fields){
  // Executing the MySQL query (select all data from the 'users' table).
  if (error) throw error;
  connection.query('SELECT itemID,itemname,imageurl,price,description FROM items WHERE authorized_user = \"' + userresult[0].clinicname + "\" and circulation =\"true\"", function (error, results, fields) {
    //console.log('SELECT * FROM user_info WHERE user = "' + req.body.userName.userName + '"')
    // If some error occurs, we throw an error.
  
    if (error) throw error; 
    //console.log(results[0])
  
    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    console.log("GOT this many" + results.length + " ITEMS")
    res.json({reply:results})

  });

  });
});
});


app.post('/modifyitems', function (req, res){
  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }
  let method = req.body.method
  let itemid = req.body.itemid

  if(method == "delete")
  {
    connection.query('UPDATE items SET circulation = \"' + 'false\"' +  ' WHERE itemID = ' + itemid, function(error, results, fields){
      if (error) throw error;
      else res.send("ITEM DELETED SUCCESSFULLY")
    })
  }
  else if(method == "edit")
  {
    let itemname = req.body.itemName
    let description = req.body.itemDescription
    let imageurl = req.body.imageURL
    let price = req.body.itemPrice
    connection.query('UPDATE items SET itemname = \"' + itemname + '\",description = \"' + description + '\", imageurl = \"' + imageurl + '\", price = ' + price + ' WHERE itemID = ' + itemid, function(error, results, fields){

    if (error) throw error;
    else res.send("ITEM SUCCESSFULLY UPDATED")
    })
  }
  
  
})
});

app.post('/additem', function (req, res){
  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }
  let itemname = req.body.itemname
  let description = req.body.description
  let imageurl = req.body.imageurl
  let price = req.body.price
  let user = req.body.user

  connection.query('INSERT INTO items (itemname,description,imageurl,price,authorized_user) VALUES (\"' + itemname +'\",\"' + description +'\", \"' + imageurl +'\",\"' + price + '\",\"' + user + '\")', function (error, results, fields){
    if (error) throw error;
    else res.json({status:"ITEM ADDED SUCCESSFULLY"})
  })
});
});

app.get('/vieworders', function (req, res){
  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }

  let user = req.body.user

  connection.query('SELECT usertype FROM user_info WHERE user = \"' + req.body.userName + "\"", function (error,userresult, fields){
    // Executing the MySQL query (select all data from the 'users' table).
    if (error) throw error;
    
    if(userresult[0].usertype == "vendor")
    {
      let orderscope = req.body.orderscope
      if(orderscope == "all")
      {
        connection.query('SELECT orderID, buyer, email, status,itemID,tracking FROM orders INNER JOIN user_info ON orders.buyer = user_info.user WHERE vendor = "' + req.body.userName + '\"', function (error,results,fields){
        if (error) throw error;
        else res.json(results)
        
        })
      }
      else if(orderscope == "unfulfilled")
      {
        connection.query('SELECT orderID, buyer, email, status,itemID,tracking FROM orders INNER JOIN user_info ON orders.buyer = user_info.user WHERE vendor = "' + req.body.userName + '\" AND status != "fulfilled"', function (error,results,fields){
          if (error) throw error;
          else res.json(results)
          
          })
      }
    }
    else
    {
      connection.query('SELECT orderID, clinicname, status,itemID,tracking FROM orders INNER JOIN user_info ON orders.vendor = user_info.user WHERE buyer = "' + req.body.userName + '\"', function (error,results,fields){
        if (error) throw error;
        else res.json(results)
        
        })
    }
  })
});
});


app.post('/vieworders', function (req, res){
  connection.getConnection(function (err, connection) {
    if(err) {
      console.log(err)
      return
    }
  let method = req.body.method
  let orderid = req.body.orderid

  if(method == "delete")
  {
    connection.query('Update FROM orders WHERE orderID = ' + orderid, function (error, results, fields){
      if (error) throw error;
      else res.send("ORDER DELETED SUCCESSFULLY")
    })
  }
  else if(method == "edit")
  {
    let status = req.body.status
    let itemid = req.body.itemid
    let tracking = req.body.tracking
    connection.query('UPDATE orders SET status = \"' + status + '\", itemid = \"' + itemid+ '\", tracking = ' + tracking + ' WHERE orderID = ' + orderid, function(error, results, fields){

    if (error) throw error;
    else res.send("ORDER SUCCESSFULLY UPDATED")
    })
  }
  
  
})
});

app.post('/addorder', function (req, res){
  connection.getConnection(function (err, connection) {
        if(err) {
      console.log(err)
      return
    }
  let itemID = req.body.itemid
  let buyer = req.body.userName
  
  connection.query("SELECT addedby FROM items WHERE itemID = " + itemID, function(error, vendorresults, fields){
    if (error) throw error;
    console.log(vendorresults)
    let vendor = vendorresults[0].addedby
    connection.query('INSERT INTO orders (vendor,buyer,status,itemID,tracking) VALUES (\"' + vendor +'\",\"' + buyer +'\",\"new\",\"' + itemID + '\",\"None\")', function (error, results, fields){
      if (error) throw error;
      else res.send("ORDER CREATED SUCCESSFULLY")
    })
  })
  
});
});
// Starting our server.
app.listen(3307, () => {
 console.log('Go to https://localhost:3307/user_info so you can see the data.');
});
