import React from 'react'
import { StyleSheet , View , Text , Pressable , Image  } from 'react-native';
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const style = StyleSheet.create({
  contHeadInfo:{
    height:110,
    padding:20
  },
  accountText:{
    fontSize:26,
    color:'#1E293B',
    fontWeight:'bold',
    position:'absolute',
    bottom:0,
    marginBottom:10,
  },
  photo:{
    height:30,
    width:30,
    position:'absolute',
    right:0,
    top:0,
  },
  contButt:{
    width:'100%',
    paddingHorizontal:20,
    paddingVertical:8,
    flexDirection:'row',
    alignSelf:'center',
  },
  contPhotoExit:{
    backgroundColor:'rgb(30,41,59)',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    height:50,
    width:50
  },
  photoExit:{
    tintColor:'white',
    height:'60%',
    width:'60%'
  },
  text:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:12,
    fontSize:16,
    fontWeight:'300',
    color:'rgba(28, 28, 30, 0.68)'
  }
})

function Config(props) {

  const logOut = () => {
    AsyncStorage.removeItem('token');
    props.navigation.navigate('Loggin');
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={style.contHeadInfo}>
        <Pressable onPress={()=>(props.navigation.goBack())}>
          <Image style={style.photo} source={require('../../../assets/images/search-page/Close-Icon.png')}/>
        </Pressable>
        <Text style={style.accountText}>
          Account
        </Text>
      </View>
    <DrawerItemList {...props} />
    <Pressable style={style.contButt} onPress={()=>logOut()}>
      <View style={style.contPhotoExit}>
          <Image style={style.photoExit} source={require('../../../assets/images/app-setting/sign-out.png')}/>
      </View>
      <Text style={style.text}>
        Sing Out
      </Text>
    </Pressable>

  </DrawerContentScrollView>
  )
}

export default Config
