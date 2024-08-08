import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Prefers from '../views/Prefers';
import RoutePayUser from '../routes/RoutePayUser';
import RoutMain from '../routes/RoutMain';

// import { RouteAddPublic } from './RouteAddPublic';

const Tab = createBottomTabNavigator();

function RouteButtsNav() {

  return (
    <Tab.Navigator
    initialRouteName="Cart"
    > 
      <Tab.Screen
        name="Main"
        // component={RouteAddPublic}
        component={Prefers}
        options={{ 
          tabBarAccessibilityLabel:'false',
          headerShown:false,
          tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => (
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/home.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Preferens"
        component={Prefers}
        options={{
          headerShown:false,
          tabBarLabel: 'Preferens',
          tabBarIcon: ({ color }) => (
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/favourite.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={RoutMain}
        options={{
          headerShown:false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/cart.png')}/>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RoutMain}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle:{
            backgroundColor:'rgb(14 , 165 , 233)',
            color:'white',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          },
          headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/notification.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={RoutePayUser}
        options={{
          headerShown:false,
          tabBarLabel: 'User',
          tabBarIcon: ({ color }) => (
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/account.png')}/>
          ),
        }}
      />
  </Tab.Navigator>
  )
}

export default RouteButtsNav

