import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Pay_user from '../user/Pay_user/Pay_user'
import Main from '../views/Main'
import Prefers from '../views/Prefers'
import UserView from '../views/UserView'


import RoutMain from '../routes/RoutMain'


const Tab = createBottomTabNavigator();

function ButtNav() {

  return (
    <Tab.Navigator
    initialRouteName="Home"
    > 
      <Tab.Screen
        name="Home"
        component={Main}
        options={{ 
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
        component={Pay_user}
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
        component={UserView}
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

export default ButtNav

