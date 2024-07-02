import React  from 'react'
import { View , FlatList , ImageBackground , Text , TouchableOpacity , ScrollView , Image , StyleSheet } from 'react-native'
import Header from '../components/Header/Header';
import RoutMain from '../routes/RoutMain';

const style = StyleSheet.create({
    contAllButts:{
        paddingHorizontal:15,
        paddingVertical:30,
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
    contPhotoIcon:{
        width:30,
        height:30,
    },
    buttActive:{
        backgroundColor:'rgb(14 , 165 , 233)',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    buttNotActive:{
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
    contAllView:{
        borderTopLeftRadius:'35%',
        borderTopRightRadius:'35%',
        width:150,
        marginLeft:20,
        paddingBottom:15,
        overflow:'hidden',
    },
    backgroundPanel:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        overflow:'hidden',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        objectFit:'cover',
    },
    textInfoTags:{
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
        
})



const renderImage = ({ item }) => (
    <View style={style.contAllView}>
      <View style={{height:160,marginBottom:10}}>
        <ImageBackground style={style.backgroundPanel} source={item.photo}>
            <TouchableOpacity style={style.textInfoTags}>
                <Text style={{color:'#666666'}}>
                    {item.info}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttHeart}>
              <Image style={{tintColor:'red',width:'70%',height:'70%'}} source={require('../../assets/images/single-product-page/heart.svg')} />
            </TouchableOpacity>
        </ImageBackground>    
      </View>

      <Text style={{fontSize:18,marginBottom:10}}>
        {item.title}
      </Text>
      <Text >
        ${item.price} 
      </Text>
    </View>
);

function Prefers() {
    const elements = [
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
        {
        'photo' : require('../../assets/images/favourite/sort-1.png'),
        'info' : 'Bed',
        'title' : 'Edificio Aqua',
        'price' : 6000,
        },
    ]

  return (
        <>
        <RoutMain />
            <ScrollView>
                <View style={style.contAllButts}>
                    <View style={style.contButtsLeft}>
                        <TouchableOpacity style={style.buttActive}>
                            <View style={style.contPhotoIcon}>
                                <Image source={require('../../assets/images/favourite/sort.svg')} />
                            </View>
                            <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>
                                Sort
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.buttNotActive}>
                            <View style={style.contPhotoIcon}>
                                <Image source={require('../../assets/images/favourite/filter.svg')} />                       
                            </View>
                            <Text style={{color:'#666666',fontSize:18,fontWeight:'bold'}}>
                                Filter
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.contButtsRigth}>
                        <TouchableOpacity>
                            <View style={style.contPhotoIcon}>
                                <Image source={require('../../assets/images/favourite/column.svg')} />                       
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.contPhotoIcon}>
                                <Image source={require('../../assets/images/favourite/row.svg')}/>                       
                            </View>
                        </TouchableOpacity>            
                    </View>
                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={elements}
                    decelerationRate={0}
                    numColumns={2}
                    renderItem={renderImage}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </>
    )
}

export default Prefers