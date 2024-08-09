import React , { useContext } from 'react';
import { Context } from '../../components/Contextos/AddPublicContext';
import { StyleSheet , View , TextInput , Pressable } from 'react-native';

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

function TitlePublic({ navigation }) {
  const { title , setTitle } = useContext(Context);
  return (
    <View>
      <TextInput value={title} onChangeText={(text) => setTitle(text)}/>
      <Pressable style={styles.btn} onPress={() => console.log(title)}/>
      <Pressable style={styles.btn2} onPress={() => navigation.navigate('Description')}/>
    </View>
  )
}

export default TitlePublic