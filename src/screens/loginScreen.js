import React, {useState, createRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/opticx.png'
import * as SecureStore from 'expo-secure-store';
import { Component } from 'react';
import StackNav from '../routes/StackNav';

class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
        userName: '',
        userPassword:'',
        errortext:''
    }
}

 loginpressed=()=>{
  this.setState({errortext:''});
  if (!this.state.userName) {
    alert('Please fill User Name');
    return;
  }
  if (!this.state.userPassword) {
    alert('Please fill Password');
    return;
  }
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
    userName: this.state.userName,
    userPassword: this.state.userPassword
  })
}
)
    .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader

      console.log(responseJson);
      // If server response message same as Data Matched
      if (responseJson.status === 'LOGIN SUCCESS') {
        if(responseJson.role=='vendor')
        {
         
          this.props.navigation.replace('stackNavigationRoutes', {
            screen: 'Home',
            params: { name: responseJson.name,userName:responseJson.username }
          });
        }
        else
        {
          this.props.navigation.replace('stackNavigationRoutes',{
            screen: 'publicHome',
            params: { name: responseJson.name,
            userName:responseJson.username}
          })
        }

      } else {
        this.setState({errortext:'Login failed.Please check your user name id or password'});
        console.log('Please check your user name id or password');
      }
    })
    .catch((error) => {
      //Hide Loader
      console.error(error);
    });
  };

   signup=() => {
      this.props.navigation.navigate('Signup')
  };
  render(){
     
  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <Text style={styles.logo}>Optic Origin</Text>
     <Text style={styles.errorStyle}>{this.state.errortext}</Text>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="User Name..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({userName:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({userPassword:text})}/>
     </View>
     <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.loginpressed}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={this.signup}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
   </View>
      );
  }
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
