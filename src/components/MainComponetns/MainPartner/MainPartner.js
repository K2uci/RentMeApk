import React from 'react';
import { StyleSheet , View , Text , FlatList , Image, TouchableOpacity } from 'react-native'


const style = StyleSheet.create({
    contText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:30,
        paddingHorizontal:20,
    },
    textName:{
        fontSize:25,
        fontWeight:600,
        color:'#1E293B',
    },
    textAux:{
        fontSize:18,
        color:'#666666',
        justifyContent:'center',
    },
    contAllPanel:{
        borderRadius:20,
        borderWidth:1,
        height:100,
        width:240,
        flexDirection:'row',
        alignItems:'center',
        margin:10,
    },
    contPhoto:{
        width:70,
        height:70,
        borderRadius:'50%',
        marginHorizontal:12,
        overflow:'hidden',
    },
    textNamePanle:{
        color: '#1E293B',
        fontSize:18,
        fontWeight:400,
        marginBottom:5,
    }   
})


const renderImage = ({ item }) => (
    <View style={style.contAllPanel}>
      <View style={style.contPhoto}>
        <Image style={{flex:1}} source={item.photo} />        
      </View>
      <View>
        <Text style={style.textNamePanle}>
          {item.name}
        </Text>
        <Text style={{color:'#1E293B',fontWeight:100}}>
          {item.address} 
        </Text>          
      </View>
    </View>
);


function MainPartner() {
    
    const infoPanel = [
        {
          'name' : 'Furnito',
          'photo' : require('../../../../assets/images/category-page/category-1.png'),
          'address' : 'Auckland, NZ',
        },
        {
          'name' : 'Wood Lande',
          'photo' : require('../../../../assets/images/category-page/category-1.png'),
          'address' : 'New York ,USA'
        },
        {
          'name' : 'Home Decor',
          'photo' : require('../../../../assets/images/category-page/category-1.png'),
          'address' : 'Londom, UK'
        },
    ]

  return (
    <View>
        <View style={style.contText}>
            <Text style={style.textName}>
                Official Partner
            </Text>
            <Text style={style.textAux}>
                Ver todo 
            </Text>
        </View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={infoPanel}
            decelerationRate={0}
            renderItem={renderImage}
            keyExtractor={(item, index) => index.toString()}
        />
  </View>
  )
}

export default MainPartner
