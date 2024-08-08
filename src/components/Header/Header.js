import React from 'react';
import { View , Text , TouchableOpacity , Image , StyleSheet} from 'react-native';

const style = StyleSheet.create({

    contAll:{
        flexDirection:'row',
        height:45,
        justifyContent:'space-between',
        alignItems:'center', 
    },
    contButts:{
        flexDirection:'row',
        height:'100%', 
    },
    butts:{
        marginTop:10,
        height:'50%',
        width:40,
        paddingHorizontal:10,
    },
    photoButts:{
        height:'100%',
        width:'100%',
    },
    text:{
        fontWeight:'900',
        color:'rgb(14 , 165 , 233)',
        fontSize:18,
    }
})


function Header({ navigation }) {

    return (
        <View style={style.contAll}>
            <View style={style.contButts} >
                <TouchableOpacity style={style.butts} onPress={() => navigation.openDrawer()}>
                    <Image style={style.photoButts} source={require('../../../assets/images/homepage2/setting-icon.png')} />
                </TouchableOpacity>
            </View>

            <Text style={style.text}>
            RENT ME
            </Text>

            <View style={style.contButts}>
                <TouchableOpacity style={style.butts}>
                    <Image style={style.photoButts} source={require('../../../assets/images/homepage/search-icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.butts}>
                    <Image style={style.photoButts} source={require('../../../assets/images/homepage/cart-icon.png')} />
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Header;
