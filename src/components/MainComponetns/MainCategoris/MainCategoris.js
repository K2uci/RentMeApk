import React from 'react';
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
        fontWeight:600,
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
  
    const infoPanel = [
        {
          'name' : 'Casas',
          'photo' : require('../../../../assets/images/homepage/category-1.png'),
          'items' : '120',
        },
        {
          'name' : 'Apartamentos',
          'photo' : require('../../../../assets/images/homepage/category-2.png'),
          'items' : '120'
        },
        {
          'name' : 'Charcas',
          'photo' : require('../../../../assets/images/homepage/category-3.png'),
          'items' : '120'
        },
        {
          'name' : 'Hoteles',
          'photo' : require('../../../../assets/images/homepage/category-4.png'),
          'items' : '120'
        },
        {
          'name' : 'Barrio Privado',
          'photo' : require('../../../../assets/images/homepage/category-5.png'),
          'items' : '120'
        },
        {
            'name' : 'Edificio',
            'photo' : require('../../../../assets/images/homepage/category-6.png'),
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
                <Image style={{width:30,height:30}} source={require('../../../../assets/images/homepage/see-all-icon.svg')} />
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

export default MainCategoris
