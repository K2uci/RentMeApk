import React from 'react';
// import { useState , useEffect } from 'react';
import { StyleSheet , View , Text , FlatList , Image } from 'react-native'


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
        fontWeight:'600',
        color:'#1E293B',
    },
    textAux:{
        fontSize:18,
        color:'#666666',
        justifyContent:'center',
    },
    contAllPanel:{
        borderRadius:10,
        borderColor: '#6666',
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
        borderRadius:100,
        marginHorizontal:12,
        overflow:'hidden',
    },
    textNamePanle:{
        color: '#1E293B',
        fontSize:20,
        fontWeight:'600',
        marginBottom:5,
    }   
})


const renderImage = ({ item }) => (
    <View style={style.contAllPanel}>
      <View style={style.contPhoto}>
        <Image style={{flex:1}} source={item.partnerImage} />        
      </View>
      <View>
        <Text style={style.textNamePanle}>
          {item.partnerName}
        </Text>
        <Text style={{color:'#1E293B',fontWeight:'100'}}>
          {item.partnersAddres} 
        </Text>          
      </View>
    </View>
);


function MainPartner() {

  const infoPartner = [
    {
      'partnerName': 'EEUU',
      'partnerImage': require('../../../../assets/images/category-page/category-1.png'),
      'partnersAddres': 'New York'

    },
    {
      'partnerName': 'Cuba',
      'partnerImage': require('../../../../assets/images/category-page/category-1.png'),
      'partnersAddres': 'La Habana'

    },
    {
      'partnerName': 'Venezuela',
      'partnerImage': require('../../../../assets/images/category-page/category-1.png'),
      'partnersAddres': 'Caracas'

    },
    {
      'partnerName': 'Japon',
      'partnerImage': require('../../../../assets/images/category-page/category-1.png'),
      'partnersAddres': 'Tokyo'

    }
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
            data={infoPartner}
            decelerationRate={0}
            renderItem={renderImage}
            keyExtractor={(item, index) => index.toString()}
        />
  </View>
  )
}

export default MainPartner

// MODODIFICACIONES PARA UNA BD REAL

// const [infoPartner,setInfoPartner] = useState([])
// useEffect(()=>{
//   fetch('http://68.183.98.44:3001/main/loadPartner')
//   .then(res => res.json())
//   .then(data => setInfoPartner(data))
//   .catch((e)=>console.error(e))
// },[])