import React, {useState, createRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/opticx.png'
import * as SecureStore from 'expo-secure-store';
import { Component } from 'react';
import StackNav from '../routes/StackNav';

export default class itemInfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name:this.props.route.params.itemName,
      description:this.props.route.params.itemDescription,
      price:this.props.route.params.itemPrice,
      imageURL:this.props.route.params.imageURL
    }
}

 addCart=()=>{
  this.setState({errortext:''});
  if (!this.state.name) {
    this.setState({name:'Glasses'})
    return;
  }
  if (!this.state.description) {
    this.setState({description:'these glasses are still not available'})
    return;
  }
  if(!this.state.imageURL)
  {
    this.setState({imageURL:'https://pngimg.com/uploads/glasses/glasses_PNG54352.png'})
  }
  if(!this.state.itemPrice)
  {
    this.setState({itemPrice:'https://pngimg.com/uploads/glasses/glasses_PNG54352.png'})
  }
}
  render(){
     
  return(
    <View style={styles.container}>
      <Image source={this.state.imageURL} style={styles.logostyle} /> 
      <Text style={styles.logo}>{this.state.name}</Text>
      <Text style={styles.inputText}>{this.state.description}</Text>
     </View>
      );
  }
}

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
  errorStyle:{
    color:"#fff",
    padding:10,
    fontSize:25
  }
});
