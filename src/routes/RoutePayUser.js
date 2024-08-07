import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PayUser from '../views/PayUser'
import UserView from '../views/UserView';

const StackPayUser = createStackNavigator();

function RoutePayUser() {
  
  return (
    <StackPayUser.Navigator
    initialRouteName='UserView'
    screenOptions={{
      headerShown:false
    }}
    >
      <StackPayUser.Screen name="PayUser" component={PayUser} />
      <StackPayUser.Screen name="UserView" component={UserView} />
    </StackPayUser.Navigator>
  );
}

export default RoutePayUser