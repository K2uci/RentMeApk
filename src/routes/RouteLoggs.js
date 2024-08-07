import React , { useEffect , useState } from 'react'
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const StackLoggin = createStackNavigator();

function RouteLoggs() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation()

  useEffect(()=>{
    async function initialRoute() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('Home');
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    initialRoute()
  },[]);

  if (loading) {
    return null; 
  }

  return (
    <StackLoggin.Navigator initialRouteName="SignIn" screenOptions={{headerShown:false}}>
      <StackLoggin.Group key='Loggin'>
        <StackLoggin.Screen name="SignUp">
          {({ navigation}) =>  <SignUp navigation={navigation}/>}
        </StackLoggin.Screen>
        <StackLoggin.Screen name="SignIn">
          {({ navigation}) => <SignIn navigation={navigation}/>}
        </StackLoggin.Screen>
      </StackLoggin.Group>
    </StackLoggin.Navigator>
  )
}

export default RouteLoggs