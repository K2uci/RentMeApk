import { StyleSheet, Text, View ,TouchableOpacity , TextInput , CheckBox ,Image  } from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  contenedor:{
    flex:1,
    alignItems:'center',
    marginRight:1,
    paddingTop:60,
  },
  title:{
    width:'85%',
    fontSize:35,
    fontWeight:600,
    paddingBottom:10,
  },
  titleaux:{
    color:'rgb(126, 126, 129)',
    width:'85%',
    fontSize:15,
    fontWeight:10,
    marginBottom:30,  
  },
  phater:{
    width:'100%',
    alignItems:'center',
    marginVertical:20,
  },
  label:{
    color:'rgb(126, 126, 129)',
    width:'85%',
    marginBottom:5,
    fontWeight:600,
    letterSpacing:1,
  },
  input:{
    width:'85%',
    borderBottomWidth:1, 
    borderBottomColor:"rgb(126, 126, 129)",  
    color:'rgb(126, 126, 129)',
  },
  add:{
    width:'85%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25,
    alignItems:'center',
  },
  butt:{
    height:50,
    width:'85%',
    backgroundColor:'#0EA5E9',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:50,
  },
  text_butt:{
    color:"rgb(255, 255, 255)",
    fontWeight:600,
    fontSize:20,
  },
  text_aux1:{
    fontSize:18,
    marginBottom:20,
    color:'rgb(126, 126, 129)',
  },
  text_aux2:{
    fontSize:15,
    color:'rgb(126, 126, 129)',
  },
  text_aux3:{
    fontSize:15,
    color:'rgb(150, 150, 150)',
    fontWeight:600,
  },
  cont_photo:{
    width:'50%',
    justifyContent:'space-around',
    flexDirection:'row',
    marginBottom:20,
  },
  cont_aux_photo:{
    alignItems:'center',
    backgroundColor:'#rgba(14, 165, 233, 0.1)',
    borderRadius:10,
    padding:8,
  },
  photo:{
    width:30,
    height:30,
  },
})


const Sign_in = () => {

  return (
    <View style={style.contenedor}>
      <Text style={style.title}>Bienvenidos</Text>
      <Text style={style.titleaux}>Iniciar sesión para continuar</Text>
      <View style={style.phater}>
        <Text style={style.label}>Email</Text>
        <TextInput style={style.input} placeholder="yourname@gmail.com"/>       
      </View>  
      
      <View style={style.phater}>
        <Text style={style.label}>Password</Text>
        <TextInput style={style.input} placeholder="********" />    
      </View>

      <View style={style.add}>
        <View style={{flexDirection:'row'}}>
          <CheckBox/>
          <Text style={{color:'rgb(126, 126, 129)'}}>Remember Me</Text>           
        </View>
        <View>
          <Text style={{color:'#0EA5E9'}}>¿Contraseña olvidada?</Text>        
        </View>
      </View>

      <TouchableOpacity style={style.butt}>
        <Text style={style.text_butt}>Iniciar</Text>
      </TouchableOpacity>

      <Text style={style.text_aux1}>
        Or sign in with
      </Text>

      <View style={style.cont_photo}>
        <View style={style.cont_aux_photo}>
          <Image style={style.photo} source={require('../../assets/icons8-logo-de-google-50.png')} /> 
        </View>
        <View style={style.cont_aux_photo}>
          <Image style={style.photo} source={require('../../assets/icons8-facebook-50.png')} />
        </View>
        <View style={style.cont_aux_photo}>
          <Image style={style.photo} source={require('../../assets/icons8-mac-os-50.png')} /> 
        </View>
      </View>
      <View style={{marginTop:45}}>
        <Text style={style.text_aux2}>
          ¿No tienes una cuenta?
          <Text style={style.text_aux3}>
            Sign Up
          </Text> 
        </Text>
      </View>
    </View>
  )
}

export default Sign_in;
