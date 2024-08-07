import React , { useEffect , useState } from 'react';
import { StyleSheet , View , Text , Image , TextInput , Pressable } from 'react-native';

const style = StyleSheet.create({
    contAll:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    },
    btnBack:{
        position:'absolute',
        left:15,
        height:30,
        width:30
    },

})

function HeaderAddPublic({ navigation , name }) {

    const [head,setHead] = useState('');

    useEffect(()=>{
        const defineHead = () => {
            if (name === "Title") {
                setHead('Cual es el titulo de la publicacion?');
                return
            }
            if (name === "Description") {
                setHead('Cual es la descripcion de la publicacion?');
                return
            }
            if (name === "Price") {
                setHead('Cual es el precio de la renta?');
                return
            }
            if (name === "Photo") {
                setHead('Agregue una foto !!');
                return
            }
            if (name === "Disponible") {
                setHead('Que tiempo estara disponible?');
                return
            }
            if (name === "Ready") {
                setHead('Esta listo para concluir?');
                return
            }
        }
        defineHead()
    },[]);

    return (
        <View style={style.contAll}>
            {name === "Title" ? null:
                <Pressable style={style.btnBack} onPress={()=>navigation.goBack()}>
                    <Image style={{flex:1}} source={require('../../../assets/images/forget-password-screen/back-btn.svg')}/>
                </Pressable>
            }            
            <Text>
                {head}
            </Text>
        </View>
  )
}

export default HeaderAddPublic