import React from 'react';
import { StyleSheet , ScrollView } from 'react-native';

import Header from '../components/Header/Header'
import MainFlat1 from '../components/MainComponetns/MainFlat1/MainFlat1'
import MainCategoris from '../components/MainComponetns/MainCategoris/MainCategoris'
import MainDashBoard from '../components/MainComponetns/MainDashBoard/MainDashBoard';
import MainFlat2 from '../components/MainComponetns/MainFlat2/MainFlat2';
import MainPartner from '../components/MainComponetns/MainPartner/MainPartner';
import MainInspiration from '../components/MainComponetns/MainInspiration/MainInspiration';
import MainTagsSection from '../components/MainComponetns/MainTagsSection/MainTagsSection';
import Routmain from '../routes/RoutMain'

const style = StyleSheet.create({
    contAll:{
        flex:1
    }
})

function Main({navigation}) {
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

export default Main
