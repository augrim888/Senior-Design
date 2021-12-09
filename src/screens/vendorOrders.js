import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { Component } from 'react';

export default class vendorOrders extends Component{
  constructor(props) {
    super(props)
    this.state = {
        Id : this.props.route.params.orderID,
        name:this.props.route.params.buyerName,
        status:this.props.route.params.orderStatus,
        tracking:this.props.route.params.orderTracking,
        image:this.props.route.params.imageurl,
    }
    console.log(this.state.Id)
    this.props.navigation.setOptions({title: this.state.name})

}


cancelItems=()=>{
    this.props.navigation.goBack(null)
}

editItem=()=>{
    fetch('http://localhost:3307/modifyorders', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            method: 'edit',
            orderid:this.state.Id,
            status:this.state.status,
            tracking:this.state.tracking
        })
      }
      )
          .then((response) => response.json())
          .then((responseJson) => {      
            console.log(responseJson);})
            this.props.navigation.goBack(null)

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
          orderid: this.state.Id
        })
      }
      )
          .then((response) => response.json())
          .then((responseJson) => {
      
            console.log(responseJson);})
            this.props.navigation.goBack(null)

}

checkInfo=()=>{
    if (!this.state.name) {
        this.setState({name:'Glasses'})
        return;
      }
      if (!this.state.tracking) {
        this.setState({tracking:'000000000000000'})
        return;
      }
      if(!this.state.image)
      {
        this.setState({image:'https://pngimg.com/uploads/glasses/glasses_PNG54352.png'})
      }
      if(!this.state.status) 
      {
        this.setState({status:'N/A'})
     }
}
  render(){
     console.log(this.props.route.params)
     this.checkInfo()
  return(
    <View style={styles.container}>
    <Text style = {styles.logo}>Order no - {this.state.Id}</Text>
    <Image source={this.state.image} style={styles.logostyle} /> 
    <Text style = {styles.logo}> {this.state.name} </Text>
    <View style={styles.inputView} >
    <TextInput
        style={styles.inputText}
        placeholder= {this.state.tracking}
        onChangeText={text => this.setState({tracking:text})}/>
        </View>
        <View style={styles.inputView} >
    <TextInput
        style={styles.inputText}
        placeholder= {this.state.status}
        onChangeText={text => this.setState({status:text})}/>
        </View>
    <View style = {styles.row}>
    <TouchableOpacity style={styles.buttons} onPress={this.editItem}>
        <Text style={{color:'#000000'}}>Save changes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttons} onPress={this.cancelItems}>
        <Text style={{color:'#000000'}}>discard changes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttons} onPress={this.deleteItem}>
        <Text style={{color:'#000000'}}>delete Order</Text>
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
    width:500,
    backgroundColor:"#465881",
    borderRadius:25,
    height:60,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#000000",
    marginBottom:20,
    marginTop:0
  },
  inputText:{
    width:450,
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
    width:"33%",
    backgroundColor:"#dbd3a7",
    borderRadius:15,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    padding:7,
    marginHorizontal:2
  },
});