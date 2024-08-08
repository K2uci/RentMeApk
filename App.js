import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet , View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import RouteLoggs from './src/routes/RouteLoggs';
import RouteButtsNav from './src/routes/RouteButtsNav';

const Stack = createStackNavigator();

const style = StyleSheet.create({
    tab:{
      paddingTop:20,
      flex:1
    }
})

export default function App() {
  return (
    <View style={style.tab}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loggin" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Loggin" component={RouteLoggs} />
          <Stack.Screen name="Home" component={RouteButtsNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


