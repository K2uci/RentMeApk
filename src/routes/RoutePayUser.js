import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PayUser from '../views/PayUser'
import UserView from '../views/UserView';

const Stack = createStackNavigator();

function RoutePayUser() {
  
  return (
    <Stack.Navigator
    initialRouteName='UserView'
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="PayUser" component={PayUser} />
      <Stack.Screen name="UserView" component={UserView} />
    </Stack.Navigator>
  );
}

export default RoutePayUser