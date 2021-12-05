import React,{useEffect, useState} from 'react';
import { StyleSheet,ScrollView, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import clipboard from '../assets/clipboard.png'
import order from '../assets/package.png'
import {
  NavigationScreenProps,
  NavigationScreenComponent
} from 'react-navigation'
import { DefaultNavigatorOptions } from '@react-navigation/native';
import { Component } from 'react';
import { runInThisContext } from 'vm';
import StackNav from '../routes/StackNav';
  

export default class publicHome extends Component{
  constructor(props) {
    super(props)
    this.state = {
        user:this.props.route.params.user,
        resJSON:[]
    }
    this.itemInfo = this.itemInfo.bind(this)
    this.props.navigation.setOptions({title:'Welcome '+ this.state.user})
    //this.props.navigation.setOptions({headerLeft:()=>null})
}
itemInfo=(name,description,price,imageurl)=>{
  this.props.navigation.navigate('itemInfo',{itemName:name,itemDescription:description,itemPrice:price,imageURL:imageurl})
}
componentDidMount(){
  this.getResponse().then(glass => glass && this.setState({ resJSON: glass.reply }),console.log(glass))
  console.log(this.state.resJSON)
}
  getResponse = async () => {
    const response=await fetch('http://localhost:3307/userhome', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        }});
    const glass = await response.json();
    return glass;
  } 
render(){
  return(
    <View style={Styles.container}>
      <View><ul style ={{ listStyleType: "none" }}>{(() => 
      {  
        /*console.log(this.state.resJSON)
        const results=[];
        for (var i = 0; i < Object.keys(this.state.resJSON).length; i++){
          var obj = this.state.resJSON[i];
          results.push(
          <li key={obj.itemname} style = {{ listStyleType: "none" }}>
          <TouchableOpacity style={Styles.buttonStyle}>
          <TouchableHighlight style= {Styles.buttonClick} />
          <Image source = {obj.imageurl} style = {Styles.buttonImageStyle} position ={'relative'}/>
          <View style={Styles.buttonSeperatorStyle} />
          <Text style={Styles.buttonTextStyle}> {obj.itemname}</Text>
          <Text style={Styles.buttonTextStyle}> ${obj.price}</Text>
          </TouchableOpacity>
          </li>
          )
          }
        return results*/})()}lol</ul></View>
          </View>

      );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2b30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glasses:{
    color:"#000000",
    fontSize:11,
    top:10,
    marginBottom :10,
    padding: 10,
    position:'relative',
  },
  scrollView: {
    backgroundColor: '#1e2b30',
    flexGrow: 1
    //justifyContent: 'space-between'
  },
lens:{
  color:"#000000",
  fontSize:11,
  top:45,
  marginBottom :10,
  padding: 10,
  position:'relative',
},
  choice:{
    color:"#000000",
    fontSize:11
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 2,
    borderColor: '#a5b0a6',
    height: 90,
    width:250,
    borderRadius: 5,
    margin: 5,
  },
  buttonClick: {
    backgroundColor: '#07a809',
  },
  buttonImageStyle: {
    padding: 10,
    margin: 5,
    height: 80,
    width: 80,
    resizeMode:'contain'
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    padding:5
  },
  buttonSeperatorStyle: {
    backgroundColor: '#a5b0a6',
    width: 1,
    height: 80,
  },
  ul :{listStyleType: "none"}
});
