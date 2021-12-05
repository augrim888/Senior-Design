import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/loginScreen';
import Signup from './src/screens/Signup';
import StackNav from './src/routes/StackNav';

const Stack = createStackNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'Signup',
          headerLeft:null, //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
        
        {/*<Stack.Screen
        name="checkOrder"
        component={checkOrder}
        options={{
          title: 'checkOrder', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>*/}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/*Navigation Drawer as a landing page */}

       <Stack.Screen
          name="stackNavigationRoutes"
          component={StackNav}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
       />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default (App);