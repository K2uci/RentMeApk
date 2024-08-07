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

function DescriptionPublic({ navigation }) {

  const { description , setDescription } = useContext(Context);
  
  return (
    <View>
      <TextInput value={description} onChangeText={(text) => setDescription(text)}/>
      <Pressable style={styles.btn} onPress={() => console.log(description)}/>
      <Pressable style={styles.btn2} onPress={() => navigation.navigate('Price')}/>
    </View>
  )
}

export default DescriptionPublic