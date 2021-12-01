import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
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
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
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
    const [errortext,setErrortext] = useState('')
    const [misMatch,setMisMatch] = useState('')
  ////////////////////////////////////////////////////
  const signupPressed=()=>{
    setErrortext('');
    if (!userName) {
      alert('Please fill in the User Name');
      return;
    }
    if (!email) {
      alert('Please fill in the User Name');
      return;
    }
    if (!password) {
      alert('Please fill in the password');
      return;
    }
    if (!email) {
      alert('Please fill in the User Name');
      return;
    }
    if (!email) {
      alert('Please fill in the User Name');
      return;
    }
    if (!email) {
      alert('Please fill in the User Name');
      return;
    }
    if (!email) {
      alert('Please fill in the User Name');
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
      userName: userName,
      userPassword: password
    })
  
  }
  )
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
  
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'LOGIN SUCCESS') {
          if(responseJson.role=='vendor')
          {
            navigation.push('Home');
  
          }
          else
          {
        navigation.navigate('publicHome',
            { user: userName }
            );
          }
  
        } else {
          setErrortext('Login failed.Please check your user name id or password');
          console.log('Please check your user name id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
    };
  ////////////////////////////////////////////////////

  return(

    <ScrollView style={styles.scrollView}>

    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <Text style={styles.logo}>Opticx</Text>
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
     <View style={styles.row}>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setPassword(text)}
         maxLength={32}/>
     </View>
     <View style ={styles.inputText} color={'red'}>
       worng password
    </View>
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Confirm password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setConfirmPass(text)}
         maxLength={32}/>
     </View>
     <View style={styles.row}>
     <View style={styles.rowView }>
       <TextInput
         style={styles.inputText}
         placeholder="Street Address"
         placeholderTextColor="#c5ebeb"
         
         onChangeText={text => setAddress(text)}/>
     </View>
     <View style={styles.rowView }>
       <TextInput
         style={styles.inputText}
         placeholder="City"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setCity(text)}/>
     </View>
     <View style={styles.rowView} >
       <TextInput
         style={styles.inputText}
         placeholder="Zipcode"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setZipcode(text.replace(/[^0-9]/g, ''))}
         maxLength={5}/>
     </View>
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
     dropDownStyle={{backgroundColor: '#fff'}}
     placeholder="Select a state"
     placeholderStyle={{
      color: "#c5ebeb",
    }}
     textStyle={{
      fontSize: 15
    }}
     containerStyle={{
       backgroundColor:"#465881"
    }}
    labelStyle={styles.inputText}
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
     {console.log(phone)}
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
    flex: 2,
    flexDirection: "row",
    alignItems:'center',
    flexWrap: "nowrap",
    justifyContent:'space-around'
  },
  rowView:{
    width:"40%",
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
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:60,
    marginBottom:20,
    justifyContent:"center",
    padding:10,
    zIndex:10
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
    height:30,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10,
    zIndex:1
  },
});
