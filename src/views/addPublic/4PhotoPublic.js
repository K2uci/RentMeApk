import React , { useContext , useState } from 'react';
import { Context } from '../../components/Contextos/AddPublicContext';
import { launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet , View , Text  , TextInput , Pressable , Image } from 'react-native';

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

function PhotoPublic({ navigation }) {

  const { photo , setPhoto } = useContext(Context);

  const subirFoto = () => {
    launchImageLibrary({   
      mediaType:'photo',
      includeBase64:true,
    },(response) => {
      setPhoto(response.assets[0].uri)
    });

  };


  return (
    <View>
      <TextInput value={photo} onChangeText={(text) => setPhoto(text)}/>
      <Pressable style={styles.btn} onPress={() => console.log(photo)}/>
      <View>
        <Pressable style={{ width: 20, height: 20 , backgroundColor:'black' }} onPress={subirFoto} />
        {photo ? 
        <View>
          <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
        </View>

        : null}
      </View>
      <Pressable style={styles.btn2} onPress={() => navigation.navigate('Disponible')}/>
    </View>
  )
}

export default PhotoPublic
