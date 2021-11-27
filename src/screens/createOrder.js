import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import logo from '../assets/opticx.png'
import { useState } from 'react';


const createOrder = ({navigation})=>{
    const [itemName,setItemName]  = useState('');
    const [description,setDescription] = useState('');
    const [imageURL,setImageURL] = useState('');
    const [price,setPrice] = useState('');
    const [user,setUser] = useState('');

  const signupPressed=()=>{
    fetch('http://localhost:3307/additem', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
        })
      
      })
    };

  return(

    <ScrollView style={styles.scrollView}>

    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Model Name"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setItemName({itemName:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Description."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setDescription({description:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Image"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setImageURL({imageURL:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Price"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setPrice({price:text})}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Authorized user Name"
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setUser({user:text})}/>
     </View>
     <TouchableOpacity style={styles.registerBtn} onPress={signupPressed}>
          <Text style={styles.registerText}>Add Item</Text>
        </TouchableOpacity>
    </View>
</ScrollView>
      );
  }
  export default createOrder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdd1db',
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
    backgroundColor: '#bdd1db',
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
