import React from 'react'
import { StyleSheet , FlatList , View , Text , ImageBackground } from 'react-native'


const style = StyleSheet.create({
    contTitleText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:30,
        paddingHorizontal:20,
    },
    textTitle:{
        fontSize:25,
        fontWeight:'600',
        color:'#1E293B',
    },
    contAllPanle:{
        borderRadius:10,
        height:220,
        width:240,
        overflow:'hidden',
        margin:20,
    },
    panelBackground:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
        padding:20,
    },
    textInfo:{
        fontSize:19,
        fontWeight:'600',
        color:'rgb(250,250,250)',
    },
    textName:{
        fontSize:22,
        fontWeight:'600',
        marginVertical:6,
        color:'rgb(250,250,250)',
    },
})


const renderImage = ({ item }) => (
    <View style={style.contAllPanle}>
      <ImageBackground style={style.panelBackground} source={item.photo} >
        <View>
            <Text style={style.textName}>
            {item.name}
            </Text>
            <Text style={style.textInfo}>
            {item.items} items
            </Text>
        </View>
      </ImageBackground>      
    </View>
);



function MainInspiration() {

    const infoPanel = [
        {
          'name' : 'Shoping',
          'photo' : require('../../../../assets/images/homepage2/inspiration-1.png'),
          'items' : '123#',
        },
        {
          'name' : 'Vinos',
          'photo' : require('../../../../assets/images/homepage2/inspiration-2.png'),
          'items' : '123#'
        },
        {
          'name' : 'Romantico',
          'photo' : require('../../../../assets/images/homepage2/inspiration-3.png'),
          'items' : '123#'
        },
        {
            'name' : 'Teatros',
            'photo' : require('../../../../assets/images/homepage2/inspiration-4.png'),
            'items' : '123#'
        },
    ]

  return (
    <View>
        <View style={style.contTitleText}>
            <Text style={style.textTitle}>
                Inspiration & Ideas
            </Text>
        </View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={infoPanel}
            decelerationRate={0}
            snapToInterval={100}
            renderItem={renderImage}
            keyExtractor={(item, index) => index.toString()}
        />
  </View>
  )
}

export default MainInspiration
