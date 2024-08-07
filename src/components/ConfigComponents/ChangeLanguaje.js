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


function ChangeLanguaje() {

  const [check, setCheck] = useState(false);

  const infoSelect = [
      ['English'],
      ['Hindi'],
      ['Spanish'],
      ['French'],
      ['Arabic'],
      ['Bengali'],
      ['Russian'],
      ['Chineses'],
  ]

  return (
    <View style={styles.contAll}>
      <Text style={styles.textLabel}>
        Choose your local languaje
      </Text>
      {infoSelect.map((item)=>( 
        <View style={styles.contItems} key={item}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'600',color:'#666666',marginLeft:10}}>
                    {item}
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

export default ChangeLanguaje