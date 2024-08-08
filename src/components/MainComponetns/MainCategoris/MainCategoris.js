import React from 'react';
import { useEffect , useState } from 'react';
import { StyleSheet , View , FlatList , Text , Image } from 'react-native';


const style = StyleSheet.create({
    contTextCategori:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:30,
        paddingHorizontal:20,
    },
    textCategori:{
        fontSize:25,
        fontWeight:'600',
        color:'#1E293B',
    },
    textSeeAll:{
        fontSize:18,
        color:'#666666',
        justifyContent:'center',
    },
    contAll:{
        width:220,
        height:220,
        paddingHorizontal:20,
        paddingVertical:10,
    },
    contPhoto:{
        width:'100%',
        height:'70%',
        borderRadius:10,
        marginBottom:20,
        overflow:'hidden',
    },
    photo:{
        width:'100%',
        height:'100%',
    },  
    text_info3:{
        fontSize:20,
        paddingBottom:3,
    },
    text_info4:{
        fontSize:12,
    }
})


const renderImage = ({ item }) => (
    <View style={style.contAll}>
      <View style={style.contPhoto}>
        <Image style={style.photo} source={item.photo} />        
      </View>
      <Text style={{fontSize:20,paddingBottom:3}}>
        {item.name}
      </Text>
      <Text style={{fontSize:12}}>
        {item.items} items
      </Text>
    </View>
);


function MainCategoris() {

  const [photos,setPhotos] = useState([null]);
  
  useEffect(()=>{
    fetch('http://68.183.98.44:3001/main/loadCategorys')
    .then(res => res.json())
    .then(data => setPhotos(data))
  },[])

  const infoPanel = [
      {
        'name' : 'Casas',
        'photo' : `data:image/jpeg;base64,${photos[0]}`,
        'items' : '120',
      },
      {
        'name' : 'Apartamentos',
        'photo' : `data:image/jpeg;base64,${photos[1]}`,
        'items' : '120'
      },
      {
        'name' : 'Charcas',
        'photo' : `data:image/jpeg;base64,${photos[2]}`,
        'items' : '120'
      },
      {
        'name' : 'Hoteles',
        'photo' : `data:image/jpeg;base64,${photos[3]}`,
        'items' : '120'
      },
      {
        'name' : 'Barrio Privado',
        'photo' : `data:image/jpeg;base64,${photos[4]}`,
        'items' : '120'
      },
      {
          'name' : 'Edificio',
          'photo' : `data:image/jpeg;base64,${photos[5]}`,
          'items' : '120'
      }
    ];

    return (
      <View>
          <View style={style.contTextCategori}>
            <Text style={style.textCategori}>
                Categorias
            </Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={style.textSeeAll}>
                    Ver todo 
                </Text>
                <Image style={{width:30,height:30}} source={require('../../../../assets/images/homepage/see-all-icon.png')} />
            </View>
          </View>
          {photos.length !== 0 ?
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={infoPanel}
            decelerationRate={0}
            snapToInterval={100}
            renderItem={renderImage}
            keyExtractor={(item, index) => index.toString()}
          />: <Text>Loadin</Text>
          }
      </View>
  )
}

export default MainCategoris
