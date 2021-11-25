import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import logo from '../assets/opticx.png'


const Home=({navigation})=>{


  const click=() => {
    Alert.alert("Were working on this, please come back later")

}
  return(
    <View style={Styles.container}>
                <View style = {Styles.choice}>
            <TouchableOpacity style={Styles.logostyle} onPress={click}>
            <Image source = {require('../assets/lens.png')} style = {Styles.lensStyle} position ={'relative'}/>
            <Text style={Styles.lens}>contact lens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.logostyle} onPress={click}>
            <Image source = {require('../assets/opticx.png')} style = {Styles.logostyle} />
                <Text style={Styles.glasses}>glasses</Text>
            </TouchableOpacity>
          </View>
   </View>
      );
  }
export default Home

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdd1db',
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
  logostyle:{
    padding:10,
    width: 150, 
    height: 150, 
    bottom:20,
    borderRadius: 20,
    resizeMode:'contain',
    position:'relative',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    },
    lensStyle:{
      position:'absolute',
      bottom:120,
      padding:10,
      width: 150, 
      height: 150, 
      borderRadius: 20,
      marginTop:20,
      resizeMode:'contain',
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.60,
      },
    imageBtn: {
      backgroundColor: '#859a9b',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    }
});
