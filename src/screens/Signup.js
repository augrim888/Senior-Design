import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TextInput, Image, Alert, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import logo from '../assets/opticx.png'
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


const Signup = ({navigation})=>{
  const [name,setName] = useState('')
  const [email,setEmail]  = useState('')
  const [password,setPassword] = useState('')
  const [confirmPass,setConfirmPass] = useState('')
  const [userName,setUserName] = useState('')
  const [street,setStreet]= useState('')
  const [phone,setPhone] = useState('')
  const [city,setCity]= useState('')
  const [state,setState] = useState('')
  const [zipcode, setZipcode] = useState(0)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items,setItems] = useState([
    {value:"Alabama",label:"AL"},
    {value:"Alaska",label:"AK"},
    {value:"Arizona",label:"AZ"},
    {value:"Arkansas",label:"AR"},
    {value:"California",label:"CA"},
    {value:"Colorado",label:"CO"},
    {value:"Connecticut",label:"CT"},
    {value:"Delaware",label:"DE"},
    {value:"District of Columbia",label:"DC"},
    {value:"Florida",label:"FL"},
    {value:"Georgia",label:"GA"},
    {value:"Hawaii",label:"HI"},
    {value:"Idaho",label:"ID"},
    {value:"Illinois",label:"IL"},
    {value:"Indiana",label:"IN"},
    {value:"Iowa",label:"IA"},
    {value:"Kansas",label:"KS"},
    {value:"Kentucky",label:"KY"},
    {value:"Louisiana",label:"LA"},
    {value:"Maine",label:"ME"},
    {value:"Maryland",label:"MD"},
    {value:"Massachusetts",label:"MA"},
    {value:"Michigan",label:"MI"},
    {value:"Minnesota",label:"MN"},
    {value:"Mississippi",label:"MS"},
    {value:"Missouri",label:"MO"},
    {value:"Montana",label:"MT"},
    {value:"Nebraska",label:"NE"},
    {value:"Nevada",label:"NV"},
    {value:"New Hampshire",label:"NH"},
    {value:"New Jersey",label:"NJ"},
    {value:"New Mexico",label:"NM"},
    {value:"New York",label:"NY"},
    {value:"North Carolina",label:"NC"},
    {value:"North Dakota",label:"ND"},
    {value:"Ohio",label:"OH"},
    {value:"Oklahoma",label:"OK"},
    {value:"Oregon",label:"OR"},
    {value:"Pennsylvania",label:"PA"},
    {value:"Rhode Island",label:"RI"},
    {value:"South Carolina",label:"SC"},
    {value:"South Dakota",label:"SD"},
    {value:"Tennessee",label:"TN"},
    {value:"Texas",label:"TX"},
    {value:"Utah",label:"UT"},
    {value:"Vermont",label:"VT"},
    {value:"Virginia",label:"VA"},
    {value:"Washington",label:"WA"},
    {value:"West Virginia",label:"WV"},
    {value:"Wisconsin",label:"WI"},
    {value:"Wyoming",label:"WY"}
    ])
    const [errortext,setErrorText] = useState('')

    if(Platform.OS === 'android')
    {
      DropDownPicker.setListMode("MODAL")
    }
    else 
    {
      DropDownPicker.setListMode("SCROLLVIEW")
    }
  ////////////////////////////////////////////////////
  const signupPressed=()=>{
    if (!name) {
      setErrorText('Please fill in the Name');
      return;
    }
    if (!email) {
      setErrorText('Please fill in the Email');
      return;
    }
    setErrorText('');
    if (!userName) {
      setErrorText('Please fill in the User Name');
      return;
    }
    if (!password) {
      setErrorText('Please fill in the password');
      return;
    }
    if (!confirmPass) {
      setErrorText('Please fill in the password');
      return;
    }
    if (!phone) {
      setErrorText('Please fill in the Phone no');
      return;
    }
    if (!street) {
      setErrorText('Please fill in the street Address');
      return;
    }
    if (!city) {
      setErrorText('Please fill in the City');
      return;
    }
    if (!state) {
      setErrorText('Please fill in the State');
      return;
    }
    if (!zipcode) {
      setErrorText('Please fill in the Zipcode');
      return;
    }
     /*let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = key;
      let encodedValue = (dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');*/
  
    fetch('http://localhost:3307/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name:name,
      userName: userName,
      password: password,
      email:email,
      phone:phone,
      address:street+','+city+','+state+','+zipcode
      ,
    })
  
  }
  )
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
          console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'User successfully registered') {
          navigation.push('Login')
        } 
        else if (responseJson.status =='Error: user already exists'){
          setErrorText('UserName is already registered, please try another one')
        }
        else {
          setErrorText('Registration failed.Please check your user name or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        console.error(error);
      });
    };
  ////////////////////////////////////////////////////
  return(

    <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>

    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <Text style={styles.logo}>Opticx</Text>
     <View style ={styles.errorStyle}><Text style={{color:'red'}}>{errortext}</Text></View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Name"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setName(text)}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Email"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setEmail(text)}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Username..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setUserName(text)}/>
     </View>
     <View style={styles.inputView}  >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text=>setPassword(text)}
         maxLength={32}/>
     </View>
     <View>{(()=>{
        var strongPassword =    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
        var mediumPassword = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/
         if(password && password.match(strongPassword))
         {
           return(<View style = {{flexDirection:'row'}}><Text style= {{color:'green',padding:10,fontSize:15,fontWeight:'bold',}} >strength - strong</Text></View>)
         }
         else if(password && password.match(mediumPassword))
         {
           return(<View style = {{flexDirection:'row'}}><Text style= {{color:'yellow',padding:10,fontSize:15,fontWeight:'bold',}}>strength - medium</Text></View>)
           
         }
         else if(password!='')
         {
           return(<View style = {{flexDirection:'row'}}><Text style= {{color:'red',padding:10,fontSize:15,fontWeight:'bold'}}>strength -  weak</Text></View>)
         }
         else 
         {

         }
       })()}</View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Confirm password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setConfirmPass(text)}
         maxLength={32}/>
         </View>
         {(()=>{if(password!=confirmPass && confirmPass!=''){
           return(<Text style= {{color:'red',padding:10,fontSize:15,fontWeight:'bold'}}>passwords do not match</Text>)
         }})()}
     <View style={styles.inputView }>
       <TextInput
         style={styles.inputText}
         placeholder="Street Address"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setStreet(text)}/>
     </View>
     <View style={styles.inputView }>
       <TextInput
         style={styles.inputText}
         placeholder="City"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setCity(text)}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Zipcode"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setZipcode(text.replace(/[^0-9]/g, ''))}
         maxLength={5}/>
     </View>
     <View style={styles.dropdown} zIndex={1}>
     <DropDownPicker 
     open={open}
     value={value}
     items={items}
     setOpen={setOpen}
     setValue={setValue}
     setItems={setItems}
     zIndexInverse={1000}
     dropDownStyle={{backgroundColor: '#465881'}}
     placeholder="Select a state"
     scrollViewProps={{
       nestedScrollEnabled: true,}}

     placeholderStyle={{
      color: "#c5ebeb",
    }}
     textStyle={{
      fontSize: 15,
      color:'#000000'
    }}
    style={{
      backgroundColor: "#465881",
      borderColor:'#465881'
    }}
    labelStyle={{color:"#fff"}}
    onChangeValue={value =>setState(value)}
    />
    </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Phone"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
         maxLength={10}/>
     </View>
     <TouchableOpacity style={styles.registerBtn} onPress={signupPressed}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
   </View>
   </ScrollView>


      );
  }
  export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2b30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width:'31%',
    flex: 2,
    flexDirection: "row",
    alignItems:'center',
    flexWrap: "nowrap",
    justifyContent:'space-around'
  },
  rowView:{
    width:"83%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:60,
    marginBottom:20,
    marginHorizontal:10,
    justifyContent:"center",
    padding:10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:60,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  dropdown:{
    minHeight:5,
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:60,
    marginBottom:20,
    justifyContent:"center",
    padding:10,
    zIndex:10,
  },
  scrollView: {
    backgroundColor: '#1e2b30',
    flexGrow: 1,
    //justifyContent: 'space-between'
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:20,
    marginTop:0
  },
  inputText:{
    height:50,
    color:"white"
  },
  logostyle:{
  width: 150, 
  height: 150, 
  resizeMode:'contain',
  position:'relative'
  },
  forgot:{
    color:"#000000",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  registerText:{
    color:"#000000"
  },
  registerBtn:{
    width:"50%",
    backgroundColor:"#dbd3a7",
    borderRadius:25,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10,
    zIndex:1
  },
  circle: {
    backgroundColor:'red',
    width: 10,
    height: 10,
    borderRadius: 5
 },
 errorStyle:{
  padding:10,
  fontSize:10
},
});
