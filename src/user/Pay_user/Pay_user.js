import React, { useState } from 'react';
import { StyleSheet , View , Text , Image , TextInput , TouchableOpacity } from 'react-native';


const style = StyleSheet.create({
  scroll:{
    backgroundColor:'rgb(250,250,250)',
    height:'100vh',
    width:'100vw',
  },
  main_navbar:{
    flexDirection:'row',
    height:45,
    justifyContent:'center',
    alignItems:'center', 
    borderBottomWidth:1,
    borderBottomColor:'rgb(200,200,200)'
  },
  main_text:{
    fontWeight:900,
    color:'rgb(14 , 165 , 233)',
    fontSize:18,
  },
  text_pay:{
    fontSize:16,
    color:'rgb(100,100,100)',
    textAlign:'center',
    paddingVertical:30,
    alignItems:'center',
  },
  panel2_cont_pay:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:'20vh',
    width:'100vw',

  },
  panel2_cont_photo:{
    padding:10,
    height:'100%',

    resizeMode:'contain',
  },
  panel2_but_pay:{
    height:40,
    width:100,
    backgroundColor:'rgba(240,240,240,0.7)',
    margin:10,
    borderRadius:10,
  },
  input:{
    borderRadius:10,
    height:40,
    width:'100%',
    backgroundColor:'rgb(240,240,240)',
    marginVertical:15,
    overflow:'hidden',
    justifyContent:'center',
    textAlign:'center'
  },
  pnael2_img_butt:{
    height:'100%',
    width:'100%',
    resizeMode:'contain',
  },
  cont_all:{
    padding:30,
  },
  title:{
    fontSize:16,
    fontWeight:600,
  },
  butt_aux:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  text_save:{
    fontSize:16,
  }
})


function Pay_user() {

  const [info,setInfo] = useState('Apple Pay','Enter Apple ID');

  const method_pay =[
    require('../../../assets/images/payment-method/ApplePay.png'),
    require('../../../assets/images/payment-method/GooglePay.png'),
    require('../../../assets/images/payment-method/visa-logo.png'),
    require('../../../assets/images/payment-method/PayPal.png'),
    require('../../../assets/images/payment-method/Mastercard.png'),
    require('../../../assets/images/payment-method/APAY.png'),   
  ]

  const targetSelect = (e) => {
    switch (e) {
      case 0:
        setInfo('Apple Pay')
        break;
      case 1:
        setInfo('G Pay')
        break;
      case 2:
        setInfo('Visa Card')
        break;
      case 3:
        setInfo('Paypal Information')
        break;
      case 4:
        setInfo('Master Pay')
        break;
      case 5:
        setInfo('Amazon Pay Information')
        break;
      default:
        break;
    }
  }

  return (
    <View style={style.scroll}>

      {/* Barra de Header */}

      <View style={style.main_navbar}>
        <Text style={style.main_text}>
          Payment Method
        </Text>
      </View>
      <View style={style.cont_method}>
        <Text style={style.text_pay}>
          Chose your payment method
        </Text>
        <View style={style.panel2_cont_pay}>
          {method_pay.map((item,index) => (
            <TouchableOpacity onPress={() => targetSelect(index)} style={style.panel2_but_pay} key={index}>
              <View style={style.panel2_cont_photo}>
                <Image style={style.pnael2_img_butt} source={item} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
          
      {/* Metodos de seleccion */}
      <View style={style.cont_all}>
        <Text style={style.title}>
          {info}
        </Text>
        <TextInput style={style.input} placeholder={'En Testeo'} />
        <View style={style.butt_aux}>
          <Text style={style.text_save}>
            Save Information
          </Text>
          <View>
            <Text>
              Aqui
            </Text>
          </View>
        </View>
      </View>
      

    </View>
  )
}

export default Pay_user;
