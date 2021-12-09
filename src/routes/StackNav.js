import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/pickScreen';
import createItems from '../screens/createItems';
import publicHome from '../screens/publicScreen';
import itemInfo from '../screens/itemInfo';
import vendorItems from '../screens/vendorItems';
import viewItems from '../screens/viewItems';
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
        options={{headerShown: true,          headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },}}/>
        <this.state.Stack.Screen
        name="publicHome"
        component={publicHome}
        options={{headerShown: true,          headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },}}/>
        <this.state.Stack.Screen
        name="viewItems"
        component={viewItems}
        options={{headerShown: true,          headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },}}/>
        <this.state.Stack.Screen
        name="createItems"
        component={createItems}
        options={{
          title: 'Create Order', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
        <this.state.Stack.Screen
        name="vendorItems"
        component={vendorItems}
        options={{
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
