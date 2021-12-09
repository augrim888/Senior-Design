import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import clipboard from '../assets/clipboard.png'
import addition from '../assets/add.png'
import label from '../assets/shipping.png'
import { Component } from 'react';


export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state = { 
      name:this.props.route.params.name,
      user:this.props.route.params.userName
        }
    this.props.navigation.setOptions({title:'Welcome '+ this.state.name})
    //this.props.navigation.setOptions({headerLeft:()=>null})
  }


 clickCreate=() => {
  this.props.navigation.navigate('createItems')
}
 clickCheck=() => {
  this.props.navigation.navigate('checkOrders',{name:this.state.name,userName:this.state.user})
}
 viewItems =()=>{
  this.props.navigation.navigate('viewItems',{name:this.state.name,userName:this.state.user} )
}
render(){
  return(
    <View style={Styles.container}>
            <TouchableOpacity style={Styles.buttonStyle} onPress={this.clickCreate}>
              <TouchableHighlight style= {Styles.buttonClick} />
            <Image source = {addition} style = {Styles.buttonImageStyle} position ={'relative'}/>
            <View style={Styles.buttonSeperatorStyle} />
            <Text style={Styles.buttonTextStyle}>Add Items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonStyle} onPress={this.clickCheck}>
            <TouchableHighlight style= {Styles.buttonClick} />
            <Image source = {label} style = {Styles.buttonImageStyle} />
            <View style={Styles.buttonSeperatorStyle} />
                <Text style={Styles.buttonTextStyle}>View Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonStyle} onPress={this.viewItems}>
            <TouchableHighlight style= {Styles.buttonClick} />
            <Image source = {clipboard} style = {Styles.buttonImageStyle} />
            <View style={Styles.buttonSeperatorStyle} />
                <Text style={Styles.buttonTextStyle}>View Items</Text>
            </TouchableOpacity>
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
  },
  buttonSeperatorStyle: {
    backgroundColor: '#a5b0a6',
    width: 1,
    height: 60,
  }
});
