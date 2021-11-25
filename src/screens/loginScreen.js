import React, {useState, createRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/opticx.png'


 const Login = ({navigation}) => {
     const [userName,setUserName]  = useState('');
     const [userPassword,setUserPassword] = useState('');
     const [loading, setLoading] = useState(false);
     const [errortext, setErrortext] = useState('');

const loginpressed=()=>{
  setErrortext('');
  if (!userName) {
    alert('Please fill User Name');
    return;
  }
  if (!userPassword) {
    alert('Please fill Password');
    return;
<<<<<<< HEAD
  }
  setLoading(true);
  let dataToSend = {user: userName, password: userPassword};
  /*let formBody = [];
  for (let key in dataToSend) {
    let encodedKey = key;
    let encodedValue = (dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
    console.log(encodedKey);
  }
  formBody = formBody.join('&');*/
=======
  }
  setLoading(true);
  let dataToSend = {user: userName, password: userPassword};
  let formBody = [];
  for (let key in dataToSend) {
    let encodedKey = key;
    let encodedValue = (dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
>>>>>>> 7600578510b55fae397dba017ddee142f09cdd43

  fetch('http://localhost:3307/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
<<<<<<< HEAD
    user: userName,
    password: userPassword
  })
  
=======
    firstParam: userName,
    secondParam: userPassword
  })
>>>>>>> 7600578510b55fae397dba017ddee142f09cdd43
})
    .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader
<<<<<<< HEAD
      setLoading(False);
=======
      setLoading(false);
>>>>>>> 7600578510b55fae397dba017ddee142f09cdd43
      console.log(responseJson);
      // If server response message same as Data Matched
      if (responseJson.status === 'success') {
        AsyncStorage.setItem('user_id', responseJson.data.user);
        console.log(responseJson.data.user);
        navigation.replace('DrawerNavigationRoutes');
      } else {
        setErrortext(responseJson.msg);
        console.log('Please check your user name id or password');
      }
    })
    .catch((error) => {
      //Hide Loader
<<<<<<< HEAD
      console.log(userName)
      console.error(error);
    });
    console.log(userName)
=======
      setLoading(false);
      console.error(error);
    });
>>>>>>> 7600578510b55fae397dba017ddee142f09cdd43
  };

  const signup=() => {
      navigation.push("Signup")

  };
  
  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logostyle} /> 
     <Text style={styles.logo}>Opticx</Text>
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="User Name..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => {setUserName({userName:text})}}/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         placeholder="Password..."
         placeholderTextColor="#c5ebeb"
         onChangeText={text => setUserPassword({password:text})}/>
     </View>
     <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={loginpressed}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={signup}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
   </View>
      );
  }
  export default Login

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
  forgot:{
    color:"#000000",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"#000000"
  },
  signupBtn:{
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
