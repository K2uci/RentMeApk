import RouteButtsNav from './src/routes/RouteButtsNav';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet , View } from 'react-native';


const style = StyleSheet.create({
    tab:{
        flex:1
    }
})

export default function App() {
  return (
    <View style={style.tab}>
      <NavigationContainer>
        <RouteButtsNav />
      </NavigationContainer>
    </View>
  );
}


