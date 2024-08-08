import * as React from 'react';
import { View , Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderCurrency , HeaderPassword , HeaderSelectLanguaje} from '../components/Header/HeaderConfig';

import Header from '../components/Header/Header';
import Config from '../components/Config/Config'
import Main from '../views/Main';
import ChangePassword  from '../components/ConfigComponents/ChangePassword'
import ChangeCurrency from '../components/ConfigComponents/ChangeCurrency';
import ChangeLanguaje from '../components/ConfigComponents/ChangeLanguaje';


const Drawer = createDrawerNavigator();

export default function RoutMain() {
  return (
      <Drawer.Navigator 
        initialRouteName="Main"
        screenOptions={{
            drawerLabelStyle:{
                fontSize:16,
                marginLeft:-20,
                fontWeight:'300',
            },
            header:({ navigation }) => (
                <Header navigation={navigation}/>
            ),
            drawerActiveBackgroundColor: 'transparent',
            drawerActiveTintColor: 'rgba(28, 28, 30, 0.68)'
        }}
        drawerContent={(props) => <Config {...props} />}
        >
        <Drawer.Screen 
            name="Main" 
            component={Main}
            options={{
                drawerIcon:() => (
                    <View style={{backgroundColor:'rgb(30,41,59)',borderRadius:5,justifyContent:'center',alignItems:'center',height:50,width:50}}>
                        <Image style={{tintColor:'white',height:'60%',width:'60%'}} source={require('../../assets/images/notification/home.png')}/>
                    </View>
                ),
            }}
            />
        <Drawer.Screen 
            name="Change Password" 
            component={ChangePassword} 
            options={{
                drawerIcon:() => (   
                <View style={{backgroundColor:'rgb(30,41,59)',borderRadius:5,justifyContent:'center',alignItems:'center',height:50,width:50}} >
                    <Image style={{tintColor:'white',height:'60%',width:'60%'}} source={require('../../assets/images/app-setting/password-icon.png')}/>
                </View>
                ),
                header:({ navigation }) => (
                    <HeaderPassword navigation={navigation}/>
                )
            }}
            />
        <Drawer.Screen 
            name="Monedas" 
            component={ChangeCurrency} 
            options={{
                drawerIcon:() => (      
                <View style={{backgroundColor:'rgb(30,41,59)',borderRadius:5,justifyContent:'center',alignItems:'center',height:50,width:50}}>
                   <Image style={{tintColor:'white',height:'60%',width:'60%'}} source={require('../../assets/images/app-setting/currency.png')}/>
                </View>
                ),
            header:({ navigation }) => (
                <HeaderCurrency navigation={navigation}/>
            )
            }}
            />
        <Drawer.Screen 
            name="Change Language" 
            component={ChangeLanguaje} 
            options={{
                drawerIcon:() => (
                    <View style={{backgroundColor:'rgb(30,41,59)',borderRadius:5,justifyContent:'center',alignItems:'center',height:50,width:50}}>
                        <Image style={{tintColor:'white',height:'60%',width:'60%'}} source={require('../../assets/images/app-setting/language-icon.png')}/>
                    </View>
                  ),            
                header:({ navigation }) => (
                    <HeaderSelectLanguaje navigation={navigation}/>
                ) 
            }}
            />
        <Drawer.Screen 
            name="About Us" 
            component={Main} 
            options={{
                drawerIcon:() => (
                    <View style={{backgroundColor:'rgb(30,41,59)',borderRadius:5,justifyContent:'center',alignItems:'center',height:50,width:50}}>
                        <Image style={{tintColor:'white',height:'60%',width:'60%'}} source={require('../../assets/images/app-setting/about-icon.png')}/>
                    </View>
                  ),
            }}
            />
        <Drawer.Screen 
            name="FAQs" 
            component={Config} 
            options={{
                drawerIcon:() => ( 
                    <View style={{backgroundColor:'rgb(30,41,59)',borderRadius:5,justifyContent:'center',alignItems:'center',height:50,width:50}}>
                        <Image style={{tintColor:'white',height:'60%',width:'60%'}} source={require('../../assets/images/app-setting/faq-icon.png')}/>
                    </View>
                  ),
            }}
        />
      </Drawer.Navigator>

  );
}
