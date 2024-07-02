import React from 'react'
import { StyleSheet , View , Text , TouchableOpacity , Image } from 'react-native';
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer';



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
  }
})

function Config(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.contHeadInfo}>
        <TouchableOpacity onPress={()=>(props.navigation.goBack())}>
          <Image style={style.photo} source={require('../../../assets/images/search-page/Close-Icon.svg')}/>
        </TouchableOpacity>
        <Text style={style.accountText}>
          Account
        </Text>
      </View>

    <DrawerItemList {...props} />
  </DrawerContentScrollView>
  )
}

export default Config



  // jumpTo
  // goBack
  // navigate
  // reset
  // setParams
  // dispatch
  // isFocused
  // canGoBack
  // getId
  // getParent
  // getState
  // addListener
  // removeListener
  // setOptions
  // openDrawer
  // closeDrawer
  // toggleDrawer
  // emit