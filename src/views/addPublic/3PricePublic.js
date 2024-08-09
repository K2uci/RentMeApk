import React , { useContext } from 'react';
import { Context } from '../../components/Contextos/AddPublicContext';
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

function PricePublic({ navigation }) {
  const { price , setPrice } = useContext(Context);
  return (
    <View>
      <TextInput value={price} onChangeText={(text) => setPrice(text)}/>
      <Pressable style={styles.btn} onPress={() => console.log(price)}/>
      <Pressable style={styles.btn2} onPress={() => navigation.navigate('Photo')}/>
    </View>
  )
}

export default PricePublic