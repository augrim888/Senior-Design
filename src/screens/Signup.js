import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import logo from '../assets/opticx.png'


const Signup = ({navigation})=>{
  const signupPressed=()=>{
    navigation.push("Home")
  }
  
  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <Text style={styles.logo}>Opticx</Text>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Email..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({email:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({password:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Confirm password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({password:text})}/>
     </View>
     <TouchableOpacity style={styles.registerBtn} onPress={this.signupPressed}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
   </View>
      );
  }
  export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdd1db',
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
    marginBottom:10
  },
});
