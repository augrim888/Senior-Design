import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import logo from '../assets/opticx.png'
import { useState } from 'react';
import { Component } from 'react';


export default class createOrder extends Component{
    constructor(props) {
      super(props)
      this.state = {
          itemName: '',
          description:'',
          imageURL:'',
          user:'',
          price:''
      }
    }

   signupPressed=()=>{
    fetch('http://localhost:3307/additem', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          itemname:this.state.itemName,
          description:this.state.description,
          imageurl:this.state.imageURL,
          price: this.state.price,
          user:this.state.user
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status=="ITEM ADDED SUCCESSFULLY")
          {
            alert("item added succesfully")
            this.props.navigation.navigate('Home')
          }
          else {
            alert("An error occured")
          }
        })
    };
    render(){
  return(

    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Model Name"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({itemName:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Description."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({description:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Image"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({imageURL:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Price"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({price:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Authorized user Name"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => this.setState({user:text})}/>
     </View>
     <TouchableOpacity style={styles.registerBtn} onPress={this.signupPressed}>
          <Text style={styles.registerText}>Add Item</Text>
        </TouchableOpacity>
    </View>
</ScrollView>
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
