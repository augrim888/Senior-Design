import React,{useEffect, useState} from 'react';
import { StyleSheet,ScrollView, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import clipboard from '../assets/clipboard.png'
import order from '../assets/package.png'
import {
  NavigationScreenProps,
  NavigationScreenComponent
} from 'react-navigation'
  
  const getResponse = async () => {
    const response=await fetch('http://localhost:3307/userhome', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        }});
    const glass = await response.json();
    return (glass);
  //console.log(json);
}
publicHome.navigationOptions=  {
  title: 'MyScreen',
  headerLeft: ()=> null, // Note: using just `null` instead of a function should also work but could trigger a TS error
}


        {/*.then((response) => response.json())
        .then((responseJson) =>{
          if (typeof responseJson!="undefined")
          {
            setResJSON(responseJson)

          }
          //console.log(responseJson);
           //alert('Youre good');
        })
        .catch((error) => {
          //Hide Loader
          console.error(error);
        }))*/}
const [resJSON, setResJSON] = useState({ imageurl: "", itemname: "" })
useEffect(() => {
  getResponse().then(glass => {
    glass && setResJSON(glass)
  })
}, []) 

//console.log(glass[0])
    const clickCreate=() => {
    navigation.push('createOrder')
}
  const clickCheck=() => {
  navigation.push('createOrder')
}
  return(
    <View style={Styles.container}>
      <Text style={Styles.buttonTextStyle}>   {username.userName}      </Text>
      <View><ul style ={{ listStyleType: "none" }}>{(() => {if(typeof resJSON[0]!="undefined")
      {
        const results=[];
        for (var i = 0; i < Object.keys(resJSON).length; i++){
          var obj = resJSON[i];
          results.push(
          <li key={obj.itemname} style = {{ listStyleType: "none" }}>
          <TouchableOpacity style={Styles.buttonStyle}>
          <TouchableHighlight style= {Styles.buttonClick} />
          <Image source = {obj.imageurl} style = {Styles.buttonImageStyle} position ={'relative'}/>
          <View style={Styles.buttonSeperatorStyle} />
          <Text style={Styles.buttonTextStyle}>   {obj.itemname}      </Text>
          <Text style={Styles.buttonTextStyle}>     ${obj.price}</Text>
          </TouchableOpacity>
          </li>
          )
          }
          return results}})()}</ul></View>
          </View>

      );
  }
export default publicHome

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
  },
  buttonSeperatorStyle: {
    backgroundColor: '#a5b0a6',
    width: 1,
    height: 80,
  }
});
