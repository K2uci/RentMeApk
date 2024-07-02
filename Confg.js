import { StyleSheet , Text, View , Image , ScrollView ,TouchableOpacity } from 'react-native';
import React from 'react';


//color theme rgb(14 , 165 , 233)

const style = StyleSheet.create({
  cont_all:{
    width:'100vw',
    backgroundColor:'rgba(0,0,0,0.2)',
  },
  cont_scroll:{
    maxWidth:300,
    backgroundColor:'rgb(250,250,250)',
    paddingLeft:10,
  },
  text_acc:{
    color:'rgb(30,41,59)',
    fontSize:24,
    fontWeight:900,
    marginBottom:18,
  },
  cont_info:{
    paddingTop:20,
    paddingHorizontal:12,
  },
  cont_item:{
    height:70,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
  },
  cont_icon:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(30,41,59)',
    height:50,
    width:50,
    borderRadius:10,
  },
  photo:{
    width:'60%',
    height:'60%',
  },
  text_info:{
    color:'rgb(30,41,59)',
    marginLeft:15,
    fontSize:18,
  },
  text_opt:{
    color:'rgb(30,41,59)',
    marginTop:50,
    fontSize:27,
    fontWeight:900,
  },
  email:{
    marginVertical:25,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  text_email:{
    color:'rgb(30,41,59)',
    fontSize:18,
    paddingBottom:20,
  }
  
})

const Menu_Confg = () => {
    
  return (
    <ScrollView>
      <View style={style.cont_all}>
        <View style={style.cont_scroll}>
            <View style={style.cont_info}>
              <Text style={style.text_acc}>
                Account
              </Text>
              <View style={style.cont_item}>
                <View style={style.cont_icon}>
                  <Image style={style.photo} source={require('../../../assets/images/app-setting/about-icon.svg')} />
                </View>
                <Text style={style.text_info}>
                  Informacion
                </Text>
              </View>
              <View style={style.cont_item}>
                <View style={style.cont_icon}>
                  <Image style={style.photo} source={require('../../../assets/images/app-setting/password-icon.svg')} />
                </View>
                <Text style={style.text_info}>
                  Change Password
                </Text>
              </View>
              <View style={style.cont_item}>
                <View style={style.cont_icon}>
                  <Image style={style.photo} source={require('../../../assets/images/app-setting/currency.svg')} />
                </View>
                <Text style={style.text_info}>
                  Monedas
                </Text>
              </View>
              <View style={style.cont_item}>
                <View style={style.cont_icon}>
                  <Image style={style.photo} source={require('../../../assets/images/app-setting/language-icon.svg')} />
                </View>
                <Text style={style.text_info}>
                  Change Language
                </Text>
              </View> 
              <View style={style.cont_item}>
                <View style={style.cont_icon}>
                  <Image style={style.photo} source={require('../../../assets/images/app-setting/about-icon.svg')} />
                </View>
                <Text style={style.text_info}>
                  About Us
                </Text>
              </View>  
              <View style={style.cont_item}>
                <View style={style.cont_icon}>
                  <Image style={style.photo} source={require('../../../assets/images/app-setting/faq-icon.svg')} />
                </View>
                <Text style={style.text_info}>
                  FAQs
                </Text>
              </View>
              <View style={style.cont_item}>
                <View style={style.cont_icon}>
                  <Image style={style.photo} source={require('../../../assets/images/app-setting/sign-out.svg')} />
                </View>
                <Text style={style.text_info}>
                  Sing Out
                </Text>
              </View> 
              <Text style={style.text_opt}>
                More Options
              </Text>   
              <View style={style.email}>
                <Text style={style.text_email}>
                  Email Newsletter
                </Text>
                <TouchableOpacity>
                  <Text>
                    AQUI
                  </Text>
                </TouchableOpacity>
              </View>  
              <Text style={style.text_email}>
                Text Messages
              </Text>                                                                           
            </View>  
        </View>
      </View>
    </ScrollView>    
    );
}

export default Menu_Confg;