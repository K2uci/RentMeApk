import React , { useContext } from 'react';
import { Context } from '../../routes/RouteAddPublic';
import { StyleSheet , View , Pressable , Image , Text } from 'react-native';

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

function ReadyPublic({ navigation }) {

  const { title , description , price , photo , disponible } = useContext(Context);

  const senData = async () => {
    try {
        const response = await fetch('http://68.183.98.44:3001/publication/create', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title:title , 
          description:description ,
          price:price , 
          photo:photo ,
          disponible:disponible
        }),
    });
    } catch (errorPhoto) {
        console.log('ErrorPhoto:', errorPhoto);
    }
  }
  
  return (
    <View>
      <View>
        <Text>
        Titulo:{title}
        </Text>
     
      </View>
      <View>
      <Text>
      Descripcion:{description}
      </Text>
        
      </View>
      <View>
      <Text>
      Precio:{price}
          </Text>
      
      </View>
      <View>
      <Text>
          Disponibilidad:{disponible}
          </Text>
        
      </View>
      <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
      <Pressable style={styles.btn2} onPress={() => {senData();navigation.navigate('Cart')}}/>
    </View>
  )
}

export default ReadyPublic