import React from 'react';
import { StyleSheet,ScrollView, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Component } from 'react';
  

export default class checkOrders extends Component{
  constructor(props) {
    super(props)
    this.state = {
        name:this.props.route.params.name,
        user:this.props.route.params.userName,
        resJSON:null
    }
    this.props.navigation.setOptions({title:'Current Items'})
    //this.props.navigation.setOptions({headerLeft:()=>null})
}

gotoItems=(id,name,status,tracking,URL)=>{
  this.props.navigation.navigate('vendorOrders',{orderID:id,buyerName:name,orderStatus:status,orderTracking:tracking,imageurl:URL})
}

  getResponse = async () => {
    const response=await fetch('http://localhost:3307/vieworders', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      } ,
      body: JSON.stringify({
        userName: this.state.user,
      })});
    const glass = await response.json();
    return glass;
  }

render(){
  if(this.state.resJSON!=null&&this.state.resJSON!="undefined"){
    const list = this.state.resJSON
    console.log(list)
  return( 
  <View style={Styles.container}>
  <View><ul style = {{listStyleType:'none'}}>{
  list.map((obj) => { 
  return (
  <li key={obj.orderID} >
  <TouchableOpacity style={Styles.buttonStyle} key={obj.orderID}  onPress={() => this.gotoItems(obj.orderID,obj.buyer,obj.status,obj.tracking,obj.imageurl)} >
  <TouchableHighlight style= {Styles.buttonClick} />
  <Text style={Styles.buttonTextStyle}> {obj.orderID}.  </Text>
  <Image source={obj.imageurl} style={Styles.buttonImageStyle} /> 
  <View style={Styles.buttonSeperatorStyle} />
  <Text style={Styles.buttonTextStyle}> {obj.itemname}</Text>
  <Text style={Styles.buttonTextStyle}> ${obj.price} </Text>
  <View style={Styles.buttonSeperatorStyle} />
  <Text style={Styles.buttonTextStyle}> {obj.buyer}</Text>
  <Text style={Styles.buttonTextStyle}> {obj.status} </Text>
  <Text style={Styles.buttonTextStyle}> Tracking No - {obj.tracking}</Text>
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
    width:480,
    borderRadius: 5,
    margin: 5,
    alignSelf:"center",
  },
  buttonClick: {
    backgroundColor: '#07a809',
  },
  buttonImageStyle: {
    margin: 3,
    height: 40,
    width: 40,
    resizeMode:'contain'
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    padding:2
  },
  buttonSeperatorStyle: {
    backgroundColor: '#a5b0a6',
    width: 1,
    height: 80,
  },
});
