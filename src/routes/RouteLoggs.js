import React from 'react'

import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RouteLoggs() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignUp">
        {({ navigation}) =>  <SignUp navigation={navigation}/>}
      </Stack.Screen>
      <Stack.Screen name="SignIn">
        {({ navigation}) => <SignIn navigation={navigation}/>}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default RouteLoggs