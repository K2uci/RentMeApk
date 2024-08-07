import React from 'react';
import { StyleSheet , View , Text , TextInput , Image , TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    contALl:{
        flex:1,
        paddingHorizontal:15,
    },
    textInfo:{
        fontSize:22,
        color:'#666666',
        marginVertical:25,
    },
    textLabelPass:{
        color:'#666666',
        width:'100%',
        marginBottom:5,
        fontSize:12,
        fontWeight:'400'
    },
    contAllInput:{
        flexDirection:'row',
    },
    textInput:{
        width:'90%',
        color:'#666666', 
        height:30,
        borderBottomColor:'#666666',
        borderBottomWidth:1,
        marginBottom:10,
    },
    seePassword:{
        flex:1,
        
    },
    buttSave:{
        height:50,
        width:'100%',
        backgroundColor:'#0EA5E9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:30,
    },
    buttSaveText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }


})


function ChangePassword() {
    
  return (
    <View style={styles.contALl}>
      <Text style={styles.textInfo}>
        Set your new password
      </Text>
      <View>
            <View>
                <Text style={styles.textLabelPass}>
                    Enter New Password
                </Text>
                <View style={styles.contAllInput}>
                    <TextInput style={styles.textInput} placeholder='********'/>
                    <TouchableOpacity style={styles.seePassword}>
                        <Image style={{resizeMode:'contain'}} source={require('../../../assets/images/new-password-screen/close-eyes.svg')}/> 
                    </TouchableOpacity> 
                </View>
            </View>
            <View>
                <Text style={styles.textLabelPass}>
                    Confirm New Password
                </Text>
                <View style={styles.contAllInput}>
                    <TextInput style={styles.textInput} placeholder='********'/>
                    <TouchableOpacity style={styles.seePassword}>
                        <Image style={{resizeMode:'contain'}} source={require('../../../assets/images/new-password-screen/close-eyes.svg')}/> 
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.buttSave}>
            <Text style={styles.buttSaveText}>
                Set Password
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ChangePassword
