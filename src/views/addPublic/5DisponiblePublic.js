import React , { useContext } from 'react';
import { Context } from '../../routes/RouteAddPublic';
import { StyleSheet , View , Text  , TextInput , Pressable } from 'react-native';

const styles = StyleSheet.create({
  btn:{
    height:20,
    width:20,
    backgroundColor:'red'
  },
  btn2:{
    height:20,
    width:20,
    backgroundColor:'green'
  }
})

function DisponiblePublic({ navigation }) {
  const { disponible , setDisponible } = useContext(Context);
  return (
    <View>
      <TextInput textContentType='oneTimeCode' value={disponible} onChangeText={(text) => setDisponible(text)}/>
      <Pressable style={styles.btn} onPress={() => console.log(disponible)}/>
      <Pressable style={styles.btn2} onPress={() => navigation.navigate('Ready')}/>
    </View>
  )
}

export default DisponiblePublic