var mysql = require('mysql');




exports.getTest = (req,res) => {

    const connection = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        port: 3306,
        password : 'Europ@123!',
        database : 'opticx',
        connectionLimit : 1,
        queueLimit : 0,
        multipleStatements : true

    }); 

    connection.getConnection(function(err,conn)
    {
        if (err)
            res.send(400);
        let name = (req.query).user
        console.log(name)
        console.log('SELECT * FROM user_info WHERE user=' + "'" + name + "'")
        conn.query('SELECT * FROM user_info WHERE user=' + "'" + name + "'", function (error, results, fields){
        if (error) throw error;
        res.send(results)});
    });
}