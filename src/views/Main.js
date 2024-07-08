import React from 'react';

import { StyleSheet, ScrollView } from 'react-native';


import MainFlat1 from '../components/MainComponetns/MainFlat1/MainFlat1'

import MainCategoris from '../components/MainComponetns/MainCategoris/MainCategoris'

import MainDashBoard from '../components/MainComponetns/MainDashBoard/MainDashBoard';

import MainFlat2 from '../components/MainComponetns/MainFlat2/MainFlat2';

import MainPartner from '../components/MainComponetns/MainPartner/MainPartner';

import MainInspiration from '../components/MainComponetns/MainInspiration/MainInspiration';

import MainTagsSection from '../components/MainComponetns/MainTagsSection/MainTagsSection';


/**

 * Estilos para el componente principal

 */

const style = StyleSheet.create({

  contAll: {

    flex: 1

  }

});


/**

 * Función que renderiza el componente principal de la aplicación

 * 

 * @param {object} navigation - Objeto de navegación para cambiar de pantalla

 * @returns {JSX.Element} - Elemento JSX que representa el componente principal

 * 

 * Ejemplo:

 * <Main navigation={ navigation } />

 */

function Main({ navigation }) {

  return (

    <ScrollView style={style.contAll}>

      <MainFlat1 />

      <MainCategoris />

      <MainDashBoard />

      <MainFlat2 />

      <MainPartner />

      <MainInspiration />

      <MainTagsSection />

    </ScrollView>

  )

}


export default Main;