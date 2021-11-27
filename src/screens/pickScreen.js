import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import clipboard from '../assets/clipboard.png'
import order from '../assets/package.png'

const Home=({navigation})=>{


  const clickCreate=() => {
    navigation.push('createOrder')
}
  const clickCheck=() => {
  navigation.push('createOrder')
}
  return(
    <View style={Styles.container}>
            <TouchableOpacity style={Styles.buttonStyle} onPress={clickCreate}>
              <TouchableHighlight style= {Styles.buttonClick} />
            <Image source = {order} style = {Styles.buttonImageStyle} position ={'relative'}/>
            <View style={Styles.buttonSeperatorStyle} />
            <Text style={Styles.buttonTextStyle}>create orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonStyle} onPress={clickCheck}>
            <TouchableHighlight style= {Styles.buttonClick} />
            <Image source = {clipboard} style = {Styles.buttonImageStyle} />
            <View style={Styles.buttonSeperatorStyle} />
                <Text style={Styles.buttonTextStyle}>View Orders</Text>
            </TouchableOpacity>
          </View>
      );
  }
export default Home

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
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
