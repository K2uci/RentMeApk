import React from 'react'
import { StyleSheet , View , Text , Image , TouchableOpacity , FlatList , ImageBackground } from 'react-native'


const style = StyleSheet.create({
  contAllButts:{
    paddingHorizontal:15,
    paddingTop:10,
    paddingBottom:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  contButtsLeft:{
    flexDirection:'row',
    width:'68%',
    height:55,
    borderRadius:8,
    borderWidth:2,
    borderColor:'rgb(14 , 165 , 233)',
    overflow:'hidden',
  },
  contPhotoButts:{
    width:30,
    height:30,
  },
  buttSort:{
    backgroundColor:'rgb(14 , 165 , 233)',
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  buttFilter:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  contButtsRigth:{
    flexDirection:'row',
    width:'20%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
  }, 
  buttHeart:{
    backgroundColor:'white',
    borderRadius:'50%',
    height:30,
    width:30,
    margin:10,
    justifyContent:'center',
    alignItems:'center'
  },
  contAllPanel:{
    width:150,
    gap:20,
    paddingBottom:15,
  },
  BackgroundPanel:{
    width:'100%',
    height:'100%',
    borderRadius:10,
    overflow:'hidden',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    objectFit:'cover',
  },
  buttTags:{
    position:'absolute',
    bottom:0,
    left:0,
    backgroundColor:'whitesmoke',
    borderRadius:5,
    height:30,
    width:60,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    fontSize:5,
  } 
})


const renderImage = ({ item }) => (
    <View style={style.contAllPanel}>
      <View style={{height:160,marginBottom:10}}>
        <ImageBackground style={style.BackgroundPanel} source={item.photo}>
          <TouchableOpacity style={style.buttTags}>
                <Text style={{color:'#666666'}}>
                    {item.info}
                </Text>
            </TouchableOpacity>
          <TouchableOpacity style={style.buttHeart}>
            <Image style={{tintColor:'red',width:'70%',height:'70%'}} source={require('../../../../assets/images/single-product-page/heart.svg')} />
          </TouchableOpacity>
        </ImageBackground>    
      </View>
      <Text style={{fontSize:18,marginBottom:10}}>
        {item.name}
      </Text>
      <Text style={{fontWeight:100,}}>
        ${item.price} 
      </Text>
    </View>
);


function MainTagsSection() {

    const infoPanel = [
        {
          'name' : 'Apartamento punta del este',
          'photo' : require('../../../../assets/images/homepage/sort-1.png'),
          'price' : '123#',
          'eval' : 3,
          'info' : 'Home'
        },
        {
          'name' : 'Hotel Maldonado ',
          'photo' : require('../../../../assets/images/homepage/sort-2.png'),
          'price' : '123#',
          'eval' : 3,
          'info' : 'Home'
        },
        {
          'name' : 'Chacra Pinares',
          'photo' : require('../../../../assets/images/homepage/sort-3.png'),
          'price' : '123#',
          'eval' : 3,
          'info' : 'Home'
        },
        {
          'name' : 'Hermoso Apartamento',
          'photo' : require('../../../../assets/images/homepage/sort-4.png'),
          'price' : '123#',
          'eval' : 3,
          'info' : 'Home'
        },
        {
          'name' : 'Casa sobre la Playa',
          'photo' : require('../../../../assets/images/homepage/sort-5.png'),
          'price' : '123#',
          'eval' : 3,
          'info' : 'Home'
        },
        {
          'name' : 'Habitacion para 1',
          'photo' : require('../../../../assets/images/homepage/sort-6.png'),
          'price' : '123#',
          'eval' : 3,
          'info' : 'Home'
        },
    ];

  return (
    <View>  
        <View style={style.contAllButts}>
            <View style={style.contButtsLeft}>
                <TouchableOpacity style={style.buttSort}>
                    <View style={style.contPhotoButts}>
                        <Image source={require('../../../../assets/images/favourite/sort.svg')} />
                    </View>
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>
                        Sort
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttFilter}>
                    <View style={style.contPhotoButts}>
                        <Image source={require('../../../../assets/images/favourite/filter.svg')} />                       
                    </View>
                    <Text style={{color:'#666666',fontSize:18,fontWeight:'bold'}}>
                        Filter
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={style.contButtsRigth}>
                <TouchableOpacity>
                    <View style={style.contPhotoButts}>
                        <Image source={require('../../../../assets/images/favourite/column.svg')} />                       
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.contPhotoButts}>
                        <Image source={require('../../../../assets/images/favourite/row.svg')}/>                       
                    </View>
                </TouchableOpacity>            
            </View>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }} 
          data={infoPanel}
          decelerationRate={0}
          numColumns={2}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
        />

    </View>
  )
}

export default MainTagsSection
