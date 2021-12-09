import React, {useState, createRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/opticx.png'
import * as SecureStore from 'expo-secure-store';
import { Component } from 'react';

export default class vendorItems extends Component{
  constructor(props) {
    super(props)
    this.state = {
        Id : this.props.route.params.itemID,
        name:this.props.route.params.itemName,
        description:this.props.route.params.itemDescription,
        price:this.props.route.params.itemPrice,
        image:this.props.route.params.imageurl,
    }
    console.log(this.state.Id)
    this.props.navigation.setOptions({title: this.state.name})

}


cancelItems=()=>{
    this.props.navigation.goBack(null)
}

editItem=()=>{
    fetch('http://localhost:3307/modifyitems', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            method: 'edit',
            itemid: this.state.Id,
            itemName:this.state.name,
            itemDescription:this.state.description,
            itemPrice:this.state.price,
            imageURL:this.state.image
        })
      }
      )
          .then((response) => response.json())
          .then((responseJson) => {      
            console.log(responseJson);})
}
deleteItem=()=>{
    fetch('http://localhost:3307/modifyItems', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          method: 'delete',
          itemid: this.state.Id
        })
      }
      )
          .then((response) => response.json())
          .then((responseJson) => {
      
            console.log(responseJson);})
}

checkInfo=()=>{
    if (!this.state.name) {
        this.setState({name:'Glasses'})
        return;
      }
      if (!this.state.description) {
        this.setState({description:'these glasses are still under review, Please come back later or edit this if you have the information.'})
        return;
      }
      if(!this.state.image)
      {
        this.setState({image:'https://pngimg.com/uploads/glasses/glasses_PNG54352.png'})
      }
      if(!this.state.price) 
      {
        this.setState({price:'0.0'})
     }
}
  render(){
     console.log(this.props.route.params)
     this.checkInfo()
  return(
    <View style={styles.container}>
      <Image source={this.state.image} style={styles.logostyle} /> 
      <View style={styles.inputView} >
      <TextInput
         style={styles.inputText}
         placeholder= {this.state.name}
         onChangeText={text => this.setState({name:text})}/>
         </View>
         <View style={styles.inputView} >
         <TextInput
         style={styles.inputText}
         placeholder= {this.state.price}
         onChangeText={text => this.setState({price:text})}/>
         </View>
         <View style={styles.inputView} >
        <TextInput
         style={styles.inputText}
         placeholder= {this.state.description}
         onChangeText={text => this.setState({price:text})}/>
         </View>
      <View style = {styles.row}>
      <TouchableOpacity style={styles.buttons} onPress={this.editItem}>
          <Text style={{color:'#000000'}}>Edit Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={this.cancelItems}>
          <Text style={{color:'#000000'}}>discard changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={this.deleteItem}>
          <Text style={{color:'#000000'}}>delete Item</Text>
        </TouchableOpacity>
      </View>
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
    color:"#00000",
    marginBottom:20,
    marginTop:0
  },
  inputText:{
    width:180,
    color:"white",
    textAlign:'left'

  },
  logostyle:{
  width: 300, 
  height: 300, 
  resizeMode:'contain',
  position:'relative'
  },
  errorStyle:{
    color:"#fff",
    padding:10,
    fontSize:25
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
  buttons:{
    width:"25%",
    backgroundColor:"#dbd3a7",
    borderRadius:25,
    height:30,
    alignItems:"center",
    justifyContent:"center",
    padding:7
  },
});
