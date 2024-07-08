import { StyleSheet , Text , TextInput , ScrollView , View , TouchableOpacity , CheckBox } from 'react-native';
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
    fontSize:30,
    fontWeight:600,
    paddingBottom:10,
  },
  titleaux:{
    color:'rgb(126, 126, 129)',
    width:'85%',
    fontSize:19,
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
  text_aux2:{
    fontSize:18,
    color:'rgb(126, 126, 129)',
  },
  text_aux3:{
    marginLeft:5,
    fontSize:18,
    color:'rgb(100, 100, 100)',
    fontWeight:600,
  },
})

const Sign_up = () => {
  return (
    <ScrollView>
      <View style={style.contenedor}>
        <Text style={style.title}>Create an Account</Text>
        <Text style={style.titleaux}>Sign up to join</Text>

        <View style={style.phater}>
          <Text style={style.label}>Full Name</Text>
          <TextInput style={style.input} placeholder="Aelisha Sm" />
        </View>

        <View style={style.phater}>
          <Text style={style.label}>Email</Text>
          <TextInput style={style.input} placeholder="********" />
        </View>

        <View style={style.phater}>
          <Text style={style.label}>Mobile Number</Text>
          <TextInput style={style.input} placeholder="+1 (234) 567 8899" />
        </View>

        <View style={style.phater}>
          <Text style={style.label}>Password</Text>
          <TextInput style={style.input} placeholder="********" />
        </View>

        <View style={style.add}>
          <View style={{ flexDirection: 'row' }}>
            <CheckBox />
            <Text style={{ color: 'rgb(126, 126, 129)' }}>I agree to the </Text>
            <Text style={{ textDecorationLine: 'underline' }}>Terms of Service</Text>
          </View>
        </View>

        <TouchableOpacity style={style.butt}>
          <Text style={style.text_butt}>Sing Up</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 45 }}>
          <Text style={style.text_aux2}>
            Have an account
            <Text style={style.text_aux3}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sign_up;

// La estructura del componente se compone de:

// Un título principal (Create an Account) con estilo title.
// Un subtítulo (Sign up to join) con estilo titleaux.
// Cuatro secciones de entrada de datos (nombre completo, email, número de teléfono y contraseña) cada una con un título (label) y un campo de entrada (TextInput) con estilo input.
// Una sección de términos de servicio con un checkbox y un enlace a los términos de servicio.
// Un botón de registro (Sing Up) con estilo butt.
// Un enlace a la pantalla de inicio de sesión (Have an account) con estilo text_aux2 y text_aux3.