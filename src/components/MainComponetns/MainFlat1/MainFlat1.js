import React from 'react'
import { StyleSheet , View , Text , TouchableOpacity , ImageBackground , FlatList } from 'react-native'


const style = StyleSheet.create({
    contPhoto:{
        width:'100vw',
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
        fontWeight:600,
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
        fontWeight:600,
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
        <TouchableOpacity style={style.butt}>
          <Text style={style.textButt}>
            Ver Propuesta
          </Text>            
        </TouchableOpacity>
      </View>
    </ImageBackground>

);


function mainFlat1() {

    const imagesPanel = [
        {
          'title' : 'pruebas este titulo1',
          'photo' : require('../../../../assets/images/homepage/1.png'),
        },
        {
          'title' : 'pruebas este titulo2',
          'photo' : require('../../../../assets/images/homepage/2.png'),
        },
        {
          'title' : 'pruebas este titulo3',
          'photo' : require('../../../../assets/images/homepage/3.png'),
        },
      ]

  return (

    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={imagesPanel}
        renderItem={renderImagePanel}
        keyExtractor={(witem, index) => index.toString()}
      />
    </View>
  )
}

export default mainFlat1