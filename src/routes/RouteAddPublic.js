import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderAddPublic from '../components/Header/HeaderAddPublic';

import TitlePublic from '../views/addPublic/1TitlePublic';
import DescriptionPublic from '../views/addPublic/2DescriptionPublic';
import PricePublic from '../views/addPublic/3PricePublic';
import PhotoPublic from '../views/addPublic/4PhotoPublic';
import ReadyPublic from '../views/addPublic/6ReadyPublic';
import DisponiblePublic from '../views/addPublic/5DisponiblePublic';
import { AddPublicContext } from '../components/Contextos/AddPublicContext';

const StackAddPublic = createStackNavigator();

function RouteAddPublic() {

    return (            
    <AddPublicContext>
        <StackAddPublic.Navigator initialRouteName='Title' screenOptions={{header:({ navigation , route})=>(<HeaderAddPublic navigation={navigation} name={route.name}/>)}}>
            <StackAddPublic.Group key='addPublic'>
                <StackAddPublic.Screen name="Title" component={TitlePublic} />
                <StackAddPublic.Screen name="Description" component={DescriptionPublic} />
                <StackAddPublic.Screen name="Price" component={PricePublic} />
                <StackAddPublic.Screen name="Photo" component={PhotoPublic} />
                <StackAddPublic.Screen name="Disponible" component={DisponiblePublic} />
                <StackAddPublic.Screen name="Ready" component={ReadyPublic} />
            </StackAddPublic.Group>
        </StackAddPublic.Navigator>
    </AddPublicContext>
    );
}


export default RouteAddPublic;
