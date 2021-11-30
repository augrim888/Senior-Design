import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/routes/StackNav';
import 'react-native-gesture-handler';
// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/pickScreen';
import Login from './src/screens/loginScreen';
import Signup from './src/screens/Signup';
import checkOrder from './src/screens/checkOrder';
import createOrder from './src/screens/createOrder';
import publicHome from './src/screens/publicScreen';

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
        name="Home"
        component={Home}

        options={{headerShown: false}}/>
        <Stack.Screen
        name="publicHome"
        component={publicHome}
        options={{headerShown: false}}/>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'Signup', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
        <Stack.Screen
        name="createOrder"
        component={createOrder}
        options={{
          title: 'createOrder', //Set Header Title
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
        {/* Navigation Drawer as a landing page */}
       {/*<Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
       />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;