import React from 'react';
import { View , Text , TouchableOpacity , Image , StyleSheet} from 'react-native';

const style = StyleSheet.create({

    contAll:{
        flexDirection:'row',
        height:45,
        justifyContent:'center',
        alignItems:'center', 
    },
    contButts:{
        flex:1,
        flexDirection:'row',
        height:'100%', 
    },
    butts:{
        marginTop:10,
        height:'50%',
        width:40,
        paddingHorizontal:10,
    },
    text:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        fontWeight:600,
        color:'rgb(14 , 165 , 233)',
        fontSize:14,
    }
})


function HeaderPassword({ navigation }) {

    return (
        <View style={style.contAll}>
            <View style={style.contButts} >
                <TouchableOpacity style={style.butts} onPress={()=>(navigation.goBack())}>
                    <Image style={{flex:1}} source={require('../../../assets/images/forget-password-screen/back-btn.svg')}/>
                </TouchableOpacity>
                <Text style={style.text}>
                    NEW PASSWORD
                </Text>
            </View>
        </View>
  )
}

function HeaderCurrency({ navigation }) {

    return (
        <View style={style.contAll}>
            <View style={style.contButts} >
                <TouchableOpacity style={style.butts} onPress={()=>(navigation.goBack())}>
                    <Image style={{flex:1}} source={require('../../../assets/images/forget-password-screen/back-btn.svg')}/>
                </TouchableOpacity>
                <Text style={style.text}>
                    CHANGE CURRENCY
                </Text>
            </View>
        </View>
  )
}

function HeaderSelectLanguaje({ navigation }) {

    return (
        <View style={style.contAll}>
            <View style={style.contButts} >
                <TouchableOpacity style={style.butts} onPress={()=>(navigation.goBack())}>
                    <Image style={{flex:1}} source={require('../../../assets/images/forget-password-screen/back-btn.svg')}/>
                </TouchableOpacity>
                <Text style={style.text}>
                    CHANGE LANGUAGE
                </Text>
            </View>
        </View>
  )
}

export { HeaderPassword , HeaderCurrency , HeaderSelectLanguaje};
