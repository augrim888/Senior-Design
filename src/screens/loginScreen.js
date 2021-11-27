import React, {useState, createRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/opticx.png'
//import AsyncStorage from '@react-native-community/async-storage';


 const Login = ({navigation}) => {
     const [userName,setUserName]  = useState('');
     const [userPassword,setUserPassword] = useState('');
     const [loading, setLoading] = useState(false);
     const [errortext, setErrortext] = useState('');

const loginpressed=()=>{
  setErrortext('');
  if (!userName) {
    alert('Please fill User Name');
    return;
  }
  if (!userPassword) {
    alert('Please fill Password');
    return;
  }
  setLoading(true);
  let dataToSend = {user: userName, password: userPassword};
  /*let formBody = [];
  for (let key in dataToSend) {
    let encodedKey = key;
    let encodedValue = (dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');*/

  fetch('http://localhost:3307/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userName: userName,
    userPassword: userPassword
  })

})
    .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader

      setLoading(false);
      console.log(responseJson);
      // If server response message same as Data Matched
      if (responseJson.status === 'LOGIN SUCCESS') {
        if(responseJson.role=='vendor')
        {
          navigation.push('vendorHome');

        }
        else
        {
          navigation.push('Home');

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

  const signup=() => {
      navigation.push("Signup")

  };
  
  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <Text style={styles.logo}>Opticx</Text>
     <Text style={styles.errorStyle}>{errortext}</Text>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="User Name..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => {setUserName({userName:text})}}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setUserPassword({password:text})}/>
     </View>
     <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={loginpressed}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={signup}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
   </View>
      );
  }
  export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2b30',
    alignItems: 'center',
    justifyContent: 'center',
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
  height: 100, 
  resizeMode:'contain',
  position:'relative'
  },
  forgot:{
    color:"#ffffff",
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
  loginText:{
    color:"#000000"
  },
  errorStyle:{
    color:"red",
    padding:10,
    fontSize:25
  },
  signupBtn:{
    width:"50%",
    backgroundColor:"#dbd3a7",
    borderRadius:25,
    height:30,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
});
