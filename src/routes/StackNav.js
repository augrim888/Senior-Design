import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/pickScreen';
import createOrder from '../screens/createOrder';
import publicHome from '../screens/publicScreen';
import itemInfo from '../screens/itemInfo';
import { Component } from 'react';
import React from 'react';
export default  class StackNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Stack : createStackNavigator()
        }
    }
render(){
return (
<this.state.Stack.Navigator initialRouteName="publicHome">
<this.state.Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}/>
        <this.state.Stack.Screen
        name="publicHome"
        component={publicHome}
        options={{headerShown: true}}/>
        <this.state.Stack.Screen
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
        <this.state.Stack.Screen
        name="itemInfo"
        component={itemInfo}
        options={{
          title: 'item Information', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
</this.state.Stack.Navigator>
)
}
}
