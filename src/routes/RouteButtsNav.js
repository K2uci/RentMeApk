import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../views/Main'
import Prefers from '../views/Prefers'
import RoutePayUser from '../routes/RoutePayUser';
import RoutMain from '../routes/RoutMain'

const Tab = createBottomTabNavigator();

function RouteButtsNav() {

  return (
    <Tab.Navigator
    initialRouteName="Cart"
    > 
      <Tab.Screen
        name="Home"
        component={Main}
        options={{ 
          tabBarAccessibilityLabel:false,
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/home.svg')}/>
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
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/favourite.svg')}/>
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
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/cart.svg')}/>
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
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/notification.svg')}/>
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
            <Image style={{tintColor:color}} source={require('../../assets/images/notification/account.svg')}/>
          ),
        }}
      />
  </Tab.Navigator>
  )
}

export default RouteButtsNav

