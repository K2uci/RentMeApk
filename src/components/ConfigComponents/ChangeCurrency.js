import React , {useState} from 'react'
import { StyleSheet , View , Text , Image } from 'react-native';
import { CheckBox } from '@rneui/base';

const styles = StyleSheet.create({
    contAll:{
        flex:1,
        padding:20
    },
    textLabel:{
        color:'#666666',
        marginVertical:10,
    },
    contItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:30,
        marginVertical:15,
    }

})


function ChangeCurrency() {

  const [check, setCheck] = useState(false);

  const infoSelect = [
      [require('../../../assets/images/currency/Dollar.svg'),'Dollar'],
      [require('../../../assets/images/currency/Bitcoin.svg'),'Bitcoin'],
      [require('../../../assets/images/currency/Ethereum.svg'),'Ethereum'],
      [require('../../../assets/images/currency/Euro.svg'),'Euro'],
      [require('../../../assets/images/currency/Pound.svg'),'Pound'],
      [require('../../../assets/images/currency/Ruble.svg'),'Ruble'],
      [require('../../../assets/images/currency/Rupee.svg'),'Rupee'],
      [require('../../../assets/images/currency/Yen.svg'),'Yen'],
  ]

  return (
    <View style={styles.contAll}>
      <Text style={styles.textLabel}>
        Choose your currency
      </Text>
      {infoSelect.map((item)=>( 
        <View style={styles.contItems} key={item[1]}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Image style={{resizeMode:'contain'}} source={item[0]}/>
                <Text style={{fontWeight:'600',color:'#666666',marginLeft:10}}>
                    {item[1]}
                </Text>
            </View>
            <View>
                <CheckBox containerStyle={{backgroundColor:'transparet'}} size={24} checked={check} key={item[1]} onIconPress={() => setCheck(!check)}/>
            </View>
        </View>
      ))}
    </View>
  )
}

export default ChangeCurrency
