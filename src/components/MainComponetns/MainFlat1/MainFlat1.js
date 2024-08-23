import React from 'react'
// import { useEffect , useState } from 'react';
import { StyleSheet , View , Text , Pressable , ImageBackground , FlatList, Dimensions } from 'react-native'


const style = StyleSheet.create({
    contPhoto:{
        width: Dimensions.get('window').width,
        height:420,
    },
    contInfo:{
        justifyContent:'flex-end',
        height:'90%',
        paddingHorizontal:30,
    },
    textInfo:{
        height:100,
        marginBottom:20,
        fontSize:38,
        fontWeight:'600',
        color:'#111'
    },
    butt:{
        width:140,
        paddingHorizontal:10,
        paddingVertical:12,
        backgroundColor:'rgb(14 , 165 , 233)',
        borderRadius:10,
    },
    textButt:{
        fontSize:16,
        fontWeight:'600',
        textAlign:'center',
        justifyContent:'flex-end',
        color:'rgb(250 , 250 , 250)',
    }  
})

const renderImagePanel = ({ item }) => (
    <ImageBackground style={style.contPhoto} source={item.photo}>
      <View style={style.contInfo}>
        <Text style={style.textInfo}>
          {item.title}
        </Text>
        <Pressable style={style.butt}>
          <Text style={style.textButt}>
            Ver Propuesta
          </Text>            
        </Pressable>
      </View>
    </ImageBackground>

);

function mainFlat1() {

  const imagesPanel = [
        {
          'title' : 'Manos del Este',
          'photo' : require('../../../../assets/images/homepage/1.png'),
        },
        {
          'title' : 'Punta Brava',
          'photo' : require('../../../../assets/images/homepage/2.png'),
        },
        {
          'title' : 'Retiro Azul',
          'photo' : require('../../../../assets/images/homepage/3.png'),
        },
      ]

  return (

    <View>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={imagesPanel}
        renderItem={renderImagePanel}
        keyExtractor={(item, index) => index.toString()}
      /> 
    </View>
  )
}

export default mainFlat1


// MODODIFICACIONES PARA UNA BD REAL

// const [photos,setPhotos] = useState([null]);
  
// useEffect(()=>{
//   fetch('http://68.183.98.44:3001/main/loadDash')
//   .then(res => res.json())
//   .then(data => setPhotos(data))
// },[])

// const imagesPanel = [
//     {
//       'title' : 'pruebas este titulo1',
//       'photo' : `data:image/jpeg;base64,${photos[0]}`,
//     },
//     {
//       'title' : 'pruebas este titulo2',
//       'photo' : `data:image/jpeg;base64,${photos[1]}`,
//     },
//     {
//       'title' : 'pruebas este titulo3',
//       'photo' : `data:image/jpeg;base64,${photos[2]}`,
//     },
//   ]