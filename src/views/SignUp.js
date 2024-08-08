import React from 'react';
import { useState } from 'react';
import { StyleSheet , Text , TextInput , ScrollView , View , TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  contenedor:{
    flex:1,
    alignItems:'center',
    marginRight:1,
    paddingTop:35,
  },
  title:{
    width:'85%',
    fontSize:30,
    fontWeight:'600',
    paddingBottom:10,
  },
  titleaux:{
    color:'rgb(126, 126, 129)',
    width:'85%',
    fontSize:19,
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
    fontWeight:'600',
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
    fontWeight:'600',
    fontSize:20,
  },
  text_aux2:{
    fontSize:15,
    color:'rgb(126, 126, 129)',
  },
  text_aux3:{
    fontSize:15,
    color:'#0EA5E9',
    marginLeft: 5,
    fontWeight:'600',
  },
})

const SignUp = ({ navigation }) => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');

  const sendRegister = async () => {
    try {
      await fetch('http://68.183.98.44:3001/user/register', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username:username , password:password , email:email , phone:phone }),
    })
    .then(response => {
      if (response.status === 200) {
        navigation.navigate('SignIn')
      }
    })
    .catch(e => console.error('Error en la respuesta:'+e));
    } catch (error) {
        console.error('Error en la peticion:'+error);
    }
  }

  return (
    <ScrollView>
      <View style={style.contenedor}>
        <Text style={style.title}>Create an Account</Text>
        <Text style={style.titleaux}>Sign up to join</Text>

        <View style={style.phater}>
          <Text style={style.label}>Full Name</Text>
          <TextInput style={style.input} placeholder="Aelisha Sm" value={username} onChangeText={(text) => setUsername(text)} />
        </View>

        <View style={style.phater}>
          <Text style={style.label}>Email</Text>
          <TextInput style={style.input} placeholder="********" value={email} onChangeText={(text) => setEmail(text)}/>
        </View>

        <View style={style.phater}>
          <Text style={style.label}>Mobile Number</Text>
          <TextInput style={style.input} placeholder="+1 (234) 567 8899" value={phone} onChangeText={(text) => setPhone(text)}/>
        </View>

        <View style={style.phater}>
          <Text style={style.label}>Password</Text>
          <TextInput style={style.input} placeholder="********" value={password} onChangeText={(text) => setPassword(text)}/>
        </View>

        <View style={style.add}>
          <View style={{ flexDirection: 'row' }}>
            {/* <CheckBox /> */}
            <Text style={{ color: 'rgb(126, 126, 129)' }}>I agree to the </Text>
            <Text style={{ textDecorationLine: 'underline' }}>Terms of Service</Text>
          </View>
        </View>

        <TouchableOpacity style={style.butt} onPress={()=> sendRegister()}>
          <Text style={style.text_butt}>Sing Up</Text>
        </TouchableOpacity>

        <View>
          <Text style={style.text_aux2}>
            Have an account
            <Text style={style.text_aux3} onPress={()=> navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

