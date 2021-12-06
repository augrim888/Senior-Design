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
        resJSON:null
    }
      //props.things.forEach(thing => {
      //this[`${thing}_ref`] = React.createRef()
     //});
    this.props.navigation.setOptions({title:'Welcome '+ this.state.user})
    //this.props.navigation.setOptions({headerLeft:()=>null})
}

gotoItems=(name,price,description,URL)=>{
  this.props.navigation.navigate('itemInfo',{itemName:name,itemPrice:price,itemDescription:description,imageurl:URL})
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
  renderView =()=> {
    
  }
render(){
  if(this.state.resJSON!=null&&this.state.resJSON!="undefined"){
    const list = this.state.resJSON
    console.log(list)
  return( 
  <View style={Styles.container}>
  <View><ul style ={{ listStyleType: "none" }}>{
  list.map((obj) => { 
  return (
  <li key={obj.itemname} style = {{ listStyleType: "none" }} >
  <TouchableOpacity style={Styles.buttonStyle} key={obj.itemname}  onPress={() => this.gotoItems(obj.itemname,obj.price,obj.description,obj.imageurl)} >
  <TouchableHighlight style= {Styles.buttonClick} />
  <Image source = {obj.imageurl} style = {Styles.buttonImageStyle} position ={'relative'}/>
  <View style={Styles.buttonSeperatorStyle} />
  <Text style={Styles.buttonTextStyle}> {obj.itemname}</Text>
  <Text style={Styles.buttonTextStyle}> ${obj.price} </Text>
  </TouchableOpacity>
  </li>
  )
  })}
  </ul></View>
    </View>
  )}
  else {
      this.getResponse().then(glass => {glass && this.setState({ resJSON: glass.reply })})
      return null;
    }
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
    alignSelf:"center",
  },
  buttonClick: {
    backgroundColor: '#07a809',
  },
  buttonImageStyle: {
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
