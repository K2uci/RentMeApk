import React from 'react'

import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RouteLoggs() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={(props)=> <SignUp props={props}/>} />
        <Stack.Screen name="SignIn" component={(props)=> <SignIn props={props}/>} />
    </Stack.Navigator>
  )
}

export default RouteLoggs