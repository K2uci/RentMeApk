import React from 'react'
import { StyleSheet , View , Text , TouchableOpacity , ImageBackground } from 'react-native'

const style = StyleSheet.create({
    
    contAll:{
        height:'20vh',
        marginTop:20,
    },
    imageBackground:{
        width:'100%',
        height:'100%',
    },
    contInfo:{
        alignItems:'flex-end',
        height:'100%',
        justifyContent:'center',
    },
    textInfo1:{
        width:'50%',
        fontSize:12,
    },  
    textInfo2:{
        width:'50%',
        fontSize:16,
        fontWeight:600,
        marginVertical:10,
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

function MainDashBoard() {

  return (

    <View style={style.contAll}>
        <ImageBackground style={style.imageBackground} source={require('../../../../assets/images/homepage2/shop-now.png')}>
        <View style={style.contInfo}>
            <Text style={style.textInfo1}>
                UP TO 20% OFF
            </Text>h
            <Text style={style.textInfo2}>
                Descubre Punta del Este
            </Text>
             <View style={{width:'50%'}}>
                <TouchableOpacity style={style.butt}>
                    <Text style={style.textButt}>
                        Ver ahora
                    </Text>
                </TouchableOpacity>             
            </View>
        </View> 
        </ImageBackground>  
    </View>
  )
}

export default MainDashBoard
