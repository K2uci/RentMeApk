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


// Importaciones

// El código comienza con la importación de varios componentes y estilos de React Native, incluyendo StyleSheet, Text, View, TouchableOpacity, TextInput, CheckBox, e Image.

// Estilos

// El objeto style es creado utilizando StyleSheet.create() y define varios estilos para los componentes de la pantalla de inicio de sesión. Estos estilos incluyen:

// contenedor: Estilo para el contenedor principal de la pantalla.
// title: Estilo para el título principal de la pantalla.
// titleaux: Estilo para el subtítulo de la pantalla.
// phater: Estilo para los contenedores de los campos de formulario.
// label: Estilo para las etiquetas de los campos de formulario.
// input: Estilo para los campos de texto de formulario.
// add: Estilo para el contenedor de la sección de "Recordarme" y "Contraseña olvidada".
// butt: Estilo para el botón de inicio de sesión.
// text_butt: Estilo para el texto del botón de inicio de sesión.
// text_aux1, text_aux2, text_aux3: Estilos para los textos auxiliares de la pantalla.
// cont_photo: Estilo para el contenedor de las imágenes de redes sociales.
// cont_aux_photo: Estilo para los contenedores individuales de las imágenes de redes sociales.
// photo: Estilo para las imágenes de redes sociales.
// Componente Sign_in

// El componente Sign_in es una función que devuelve un JSX que representa la pantalla de inicio de sesión.

// El componente se compone de varios elementos:

// Un título principal y un subtítulo que bienvenen al usuario.
// Dos campos de formulario para el email y la contraseña, cada uno con una etiqueta y un campo de texto.
// Una sección que permite al usuario recordar su contraseña y recuperarla si la ha olvidado.
// Un botón de inicio de sesión con un texto "Iniciar".
// Una sección que permite al usuario iniciar sesión con redes sociales (Google, Facebook y Apple).
// Un texto que invita al usuario a registrarse si no tiene una cuenta.
// Notas

// El código utiliza una estructura de componentes y estilos bien organizada, lo que facilita la lectura y el mantenimiento del código.
// Los estilos se definen utilizando StyleSheet.create(), lo que es una buena práctica para separar la lógica de presentación de la lógica de negocio.
// El componente utiliza varios componentes de React Native, como TouchableOpacity, TextInput, CheckBox, e Image, lo que es adecuado para una aplicación móvil.



