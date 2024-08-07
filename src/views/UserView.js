
import React from 'react';
import { useState , useEffect } from 'react';
import { StyleSheet , ImageBackground , Text, View , ScrollView , Image ,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

const style = StyleSheet.create({
  scroll:{
    backgroundColor:'rgb(250,250,250)',
  },
  contAllInfoUp:{
    backgroundColor:'rgb(246,248,250)',
    height:'20vh',
    width:'100vw',
    flexDirection:'row',
    alignItems:'center',
  },
  contPhotoPerfil:{
    width:110,
    height:110,
    marginHorizontal:20,
  },
  photoPerfil:{
    width:'100%',
    height:'100%',
    borderRadius:100,
    overflow:'hidden',
  },
  buttNewPhoto:{
    backgroundColor:'rgb(14 , 165 , 233)',
    position:'absolute',
    height:40,
    width:40,
    bottom:0,
    right:0,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    overflow:'hidden',
  },
  newPhoto:{
    width:'50%',
    height:'50%',
  },
  textName:{
    fontSize:20,
    fontWeight:'900',
    paddingBottom:16,
  },
  textContactData:{
    color:'rgb(102,102,102)',
    marginVertical:5,
    fontSize:16,
  },
  contAllPays:{
    paddingHorizontal:20,
    paddingTop:20,
  },
  headerPays:{
    flexDirection:'row',
    marginVertical:10,
    justifyContent:'space-between',
  },
  textAddress:{
    fontSize:24,
    fontWeight:'bold',
    color:'rgb(50,50,50)',
  },
  textHeaderInfo:{
    color:'rgb(50,50,50)',
    fontSize:14,
    fontWeight:'bold',
    marginBottom:8,
  },
  textInfo:{
    color:'rgb(102,102,102)',
    fontWeight:'300',
    letterSpacing:0.5,
  },
  contPayments:{
    marginTop:60,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textPayments:{
    color:'rgb(50,50,50)',
    fontSize:24,
    fontWeight:'bold'
  },
  contAllButts:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  buttsPayments:{
    height:40,
    width:100,
    backgroundColor:'rgba(240,240,240,0.7)',
    margin:10,
    borderRadius:10,
  },
  contphotoPaymens:{
    padding:10,
    height:'100%',
    resizeMode:'contain',
  },
  imageButts:{
    height:'100%',
    width:'100%',
    resizeMode:'contain',
  }
})

function UserView({ navigation }) {

  const [dataUser,setDataUser] = useState('')

  const method_pay =[
    require('../../assets/images/payment-method/ApplePay.png'),
    require('../../assets/images/payment-method/GooglePay.png'),
    require('../../assets/images/payment-method/visa-logo.png'),
    require('../../assets/images/payment-method/PayPal.png'),
    require('../../assets/images/payment-method/Mastercard.png'),
    require('../../assets/images/payment-method/APAY.png'),   
  ]
  
  const loadDataUser = async (usermail) => {
    try {
      const response = await fetch('http://localhost:3001/user/load', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({email:usermail}),
      })
      .then(response => response.json())
      .then(data => setDataUser(data))
      .catch(e => console.log(e));
      } catch (error) {
        console.error('Error:', error);
      }
  };

  useEffect(()=>{
    const step1 = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const decoded = jwtDecode(token);
        loadDataUser(decoded.email)
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    step1();
  },[])


  return (
    <>
      <ScrollView style={style.scroll}>
        {/* Seccion de etiqueta de perfil */}

        <View style={style.contAllInfoUp}>
          <View style={style.contPhotoPerfil}>
            <ImageBackground style={style.photoPerfil} source={require('../../assets/images/category-page/category-1.png')} />
            <TouchableOpacity style={style.buttNewPhoto}>
              <Image style={style.newPhoto} source={require('../../assets/gallary-icon.svg')} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={style.textName}>
              {dataUser ? dataUser.name : 'Loading....'}
            </Text>
            <Text style={style.textContactData}>
            {dataUser ? dataUser.email : 'Loading....'}
            </Text>
            <Text style={style.textContactData} onPress={()=>console.log(dataUser)}>
              {dataUser ? dataUser.phonenumber : 'Loading....'}
            </Text>
          </View>
        </View>

      {/* Seccion de pagos y demas datos */}

      <View style={style.contAllPays}>
        <View style={style.headerPays}>
          <Text style={{fontSize:16,fontWeight:'600'}}>
            BW Wallet
          </Text>
          <Text style={{color:'rgb(102,102,102)',fontSize:14}}>
            $42.50
          </Text>
        </View>

        <View style={{marginTop:30}}>
          <Text style={style.textAddress}>
            Address
          </Text>

          <View style={{marginTop:20}}>
            <Text style={style.textHeaderInfo}>
              Home
            </Text>
            <Text style={style.textInfo}>
              121 Park Avenue, King Street, NY 23561
            </Text>
          </View>

          <View style={style.panel2_addres}>
            <Text style={style.textHeaderInfo}>
              Office
            </Text>
            <Text style={style.textInfo}>
              121 Park Avenue, King Street, NY 23561
            </Text>
          </View>
        </View>

        <View style={style.contPayments}>
          <Text style={style.textPayments}>
            Payments
          </Text>
          <Text style={{color:'rgb(102,102,102)',fontSize:14}}>
            Add
          </Text>
        </View>

        {/* Componente para listar los metodos de pago */}

        <View style={style.contAllButts}>
          {method_pay.map((item,index) => (
            <TouchableOpacity style={style.buttsPayments} onPress={()=>navigation.navigate('PayUser',{ select:index})} key={item}>
              <View style={style.contphotoPaymens} >
                <Image style={style.imageButts} source={item} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
    </>
  )
}

export default UserView
