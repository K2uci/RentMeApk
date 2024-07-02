import ButtNav from './src/buttNav/ButtNav';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet , View } from 'react-native';


const style = StyleSheet.create({
    tab:{
        width:'100vw',
    }
})

export default function App() {
  return (
    <View style={style.tab}>
      <NavigationContainer>
        <ButtNav />
      </NavigationContainer>
    </View>
  );
}


