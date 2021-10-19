import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import logo from '../assets/opticx.png'


const Home=({navigation})=>{
  return(
    <View style={Styles.container}>
      <Image source={logo} style={Styles.logostyle} /> 
          <View style = {Styles.choice}>
             <TouchableOpacity>
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
    fontSize:11
  },
  choice:{
    color:"#000000",
    fontSize:11
  },
  logostyle:{
    width: 150, 
    height: 150, 
    resizeMode:'contain',
    position:'relative'
    },
});
