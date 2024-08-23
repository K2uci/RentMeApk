import React from 'react';
// import { useState , useEffect } from 'react';
import { StyleSheet , View , Text , Image , FlatList , ImageBackground , TouchableOpacity } from 'react-native';


const style = StyleSheet.create({
    contAll:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:30,
        paddingHorizontal:20,
    },
    textInfo:{
        fontSize:25,
        fontWeight:'600',
        color:'#1E293B',
    },
    textInfoAux:{
        fontSize:18,
        color:'#666666',
        justifyContent:'center', 
    },
    panelBAckground:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        overflow:'hidden',
        alignItems:'flex-end',
        objectFit:'cover',
    },
    buttHeart:{
        backgroundColor:'white',
        borderRadius:100,
        height:30,
        width:30,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
    textInfoName:{
        fontSize:16,
        color:'#1E293B',
    },
    textInfoLastName:{
        fontSize:18,
        fontWeight:'600',
        marginVertical:6,
        color:'#1E293B',
    },
    textInfoPrice:{
        fontSize:16,
        fontWeight:'200',
        color:'#1E293B',
    },
    contAllPanel:{
        width:250,
        height:300,
        padding:20,  
    }
})


const renderImage = ({ item }) => (
    <View style={style.contAllPanel}>
      <View style={{height:160,marginBottom:10}}>
        <ImageBackground style={style.panelBAckground} source={item.photo}>
          <TouchableOpacity style={style.buttHeart}>
            <Image style={{tintColor:'red',width:'70%',height:'70%'}} source={require('../../../../assets/images/single-product-page/heart.png')} />
          </TouchableOpacity>
        </ImageBackground>    
      </View>

      <Text style={style.textInfoName}>
        {item.name}
      </Text>
      <Text style={style.textInfoLastName}>
        {item.lname}
      </Text>
      <Text style={style.textInfoPrice}>
        ${item.price} 
      </Text>
    </View>
);


function MainFlat2() {

    const infoPanel = [
      {
        'name' : 'Alquiler de Autos',
        'lname' : 'Disponible 24 Horas',
        'photo' : require('../../../../assets/images/homepage2/featured-1.png'),
        'price' : '120',
      },
      {
        'name' : 'Servicio Domestico',
        'lname' : 'Responsabilidad',
        'photo' : require('../../../../assets/images/homepage2/featured-2.png'),
        'price' : '120'
      },
      {
        'name' : 'Guarderia',
        'lname' : 'Siempre Contigo',
        'photo' : require('../../../../assets/images/homepage2/featured-3.png'),
        'price' : '120'
      },
      {
        'name' : 'Traslados Acuaticos',
        'lname' : 'Puerto Punta del Este',
        'photo' : require('../../../../assets/images/homepage2/featured-4.png'),
        'price' : '120'
      },
    ]
  

  return (
    <View>
        <View style={style.contAll}>
            <Text style={style.textInfo}>
                Necesitas algo?
            </Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={style.textInfoAux}>
                    Ver todo 
                </Text>
                <Image style={{width:30,height:30}} source={require('../../../../assets/images/homepage/see-all-icon.png')} />
            </View>
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

export default MainFlat2;

// MODODIFICACIONES PARA UNA BD REAL

// const [photo,setPhoto] = useState([])

// useEffect(()=>{
//   fetch('http://68.183.98.44:3001/main/loadNeeds')
//   .then(res => res.json())
//   .then(data => setPhoto(data))
// },[]);

//   const infoPanel = [
//     {
//       'name' : 'Alquiler de Autos',
//       'lname' : 'Disponible 24 Horas',
//       'photo' : `data:image/jpeg;base64,${photo[0]}`,
//       'price' : '120',
//     },
//     {
//       'name' : 'Servicio Domestico',
//       'lname' : 'Responsabilidad',
//       'photo' : `data:image/jpeg;base64,${photo[1]}`,
//       'price' : '120'
//     },
//     {
//       'name' : 'Guarderia',
//       'lname' : 'Siempre Contigo',
//       'photo' : `data:image/jpeg;base64,${photo[2]}`,
//       'price' : '120'
//     },
//     {
//       'name' : 'Traslados Acuaticos',
//       'lname' : 'Puerto Punta del Este',
//       'photo' : `data:image/jpeg;base64,${photo[3]}`,
//       'price' : '120'
//     },
//   ]