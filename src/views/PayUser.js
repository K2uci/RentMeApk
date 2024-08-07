import React, { useState , useEffect } from 'react';
import { StyleSheet , View , Text , Image , TextInput , TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  scroll:{
    backgroundColor:'rgb(250,250,250)',
    height:'100vh',
    width:'100vw',
  },
  mainNavbar:{
    flexDirection:'row',
    height:45,
    justifyContent:'center',
    alignItems:'center', 
    borderBottomWidth:1,
    borderBottomColor:'rgb(200,200,200)'
  },
  mainText:{
    fontWeight:'900',
    color:'rgb(14 , 165 , 233)',
    fontSize:18,
  },
  textSelect:{
    fontSize:16,
    color:'#1E293B',
    textAlign:'center',
    paddingVertical:30,
    alignItems:'center',
  },
  contAllItems:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:'20vh',
    width:'100vw',

  },
  contImageItem:{
    padding:10,
    height:'100%',

    resizeMode:'contain',
  },
  buttItem:{
    height:50,
    width:80,
    margin:10,
  },
  buttItemSelect:{
    height:50,
    width:80,
    margin:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:'rgb(14 , 165 , 233)'
  },
  input:{
    borderRadius:10,
    height:40,
    width:'100%',
    backgroundColor:'#F6F8FA',
    color:'#666666',
    marginVertical:15,
    overflow:'hidden',
    justifyContent:'center',
  },
  photo:{
    height:'100%',
    width:'100%',
    resizeMode:'contain',
  },
  contSelect:{
    flex:1,
    margin:30,
  },
  title:{
    color:'#1E293B',
    fontSize:16,
    fontWeight:'600',
  },
  buttAuxSave:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  textSave:{
    fontSize:14,
  },
  buttSave:{
    justifyContent:'center',
    textAlign:'center',
    position:'absolute',
    right:0,
    left:0,
    bottom:70,
    backgroundColor:'rgb(14 , 165 , 233)',
    height:45,
    borderRadius:10,
  },
  textSaveButt:{
    color:'white',
    fontSize:20,
    fontWeight:'600',
    textAlign:'center',
  }
})

const method_pay =[
  require('../../assets/images/payment-method/ApplePay.png'),
  require('../../assets/images/payment-method/GooglePay.png'),
  require('../../assets/images/payment-method/visa-logo.png'),
  require('../../assets/images/payment-method/PayPal.png'),
  require('../../assets/images/payment-method/Mastercard.png'),
  require('../../assets/images/payment-method/APAY.png'),   
]

function PayUser(props) {

  const [info,setInfo] = useState(['Apple Pay','Enter Apple ID']);
  const [indexSelecction,setIndexSelecction] = useState(props.route.params['select']);
  const [value,setValue] = useState(null)

  useEffect(()=>{
    targetSelect = (e) => {
      switch (e) {
        case 0:
          setInfo(['Apple Pay','Enter Apple ID'])
          setIndexSelecction(e)
          break;
        case 1:
          setInfo(['G Pay','Enter UPD ID'])
          setIndexSelecction(e)
          break;
        case 2:
          setInfo(['Visa Card','Enter Apple ID'])
          setIndexSelecction(e)
          break;
        case 3:
          setInfo(['Paypal Information','Enter Registered Email'])
          setIndexSelecction(e)
          break;
        case 4:
          setInfo(['Master Pay','Enter Master ID'])
          setIndexSelecction(e)
          break;
        case 5:
          setInfo(['Amazon Pay Information','Enter Apple ID'])
          setIndexSelecction(e)
          break;
        default:
          break;
      }
    }
    setValue(()=>{
      if (indexSelecction===5) {
        return (
        <View>
          <TextInput style={[style.input ,{marginTop:0}]} placeholder='Enter Amazon Pay UPI' />
        </View>
        )}
      if (indexSelecction===2) {
        return (
        <>
          <View>
            <TextInput style={[style.input,{marginVertical:0}]} placeholder='Card Holder Name' />
          </View>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput style={[style.input,{width:'43%'}]} placeholder='DD/MM/YY' />
            <TextInput style={[style.input,{width:'43%'}]} placeholder='CVC' />
          </View>
        </>
        )}
    })
  },[info])

  return (
    <View style={style.scroll}>
      <View style={style.mainNavbar}>
        <TouchableOpacity style={{cursor:'pointer',height:30,width:30,position:'absolute',left:10}} onPress={()=>(props.navigation.goBack())}>
          <Image style={{flex:1}} source={require('../../assets/images/forget-password-screen/back-btn.svg')}/>
        </TouchableOpacity>
        <Text style={style.mainText}>
          Payment Method
        </Text>
      </View>
      <View>
        <Text style={style.textSelect}>
          Chose your payment method
        </Text>
        <View style={style.contAllItems}>
          {method_pay.map((item,index) => (
            <TouchableOpacity onPress={() => targetSelect(index)} style={index===indexSelecction ? style.buttItemSelect:style.buttItem} key={index}>
              <View style={style.contImageItem}>
                <Image style={style.photo} source={item} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={style.contSelect}>
        <Text style={style.title}>
          {info[0]}
        </Text>
        <TextInput style={style.input} placeholder={info[1]} />
        {value}
        <View style={style.buttAuxSave}>
          <Text style={style.textSave}>
            Save Information
          </Text>
          <View>
            <Text>
              Aqui
            </Text>
          </View>
        </View>
        <TouchableOpacity style={style.buttSave}>
          <Text style={style.textSaveButt}>
            Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PayUser;
