import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import MainFlat1 from '../components/MainComponetns/MainFlat1/MainFlat1';
import MainCategoris from '../components/MainComponetns/MainCategoris/MainCategoris'
import MainDashBoard from '../components/MainComponetns/MainDashBoard/MainDashBoard';
import MainFlat2 from '../components/MainComponetns/MainFlat2/MainFlat2';
import MainPartner from '../components/MainComponetns/MainPartner/MainPartner';
import MainInspiration from '../components/MainComponetns/MainInspiration/MainInspiration';
import MainTagsSection from '../components/MainComponetns/MainTagsSection/MainTagsSection';

const style = StyleSheet.create({
  contAll: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

function Main() {
  const renderItem = ({ item }) => {
    if (item.type === 'flat1') {
      return <MainFlat1 />;
    } else if (item.type === 'categoris') {
      return <MainCategoris />;
    } else if (item.type === 'dashboard') {
      return <MainDashBoard />;
    } else if (item.type === 'flat2') {
      return <MainFlat2 />;
    } else if (item.type === 'partner') {
      return <MainPartner />;
    } else if (item.type === 'inspiration') {
      return <MainInspiration />;
    } else if (item.type === 'tagsSection') {
      return <MainTagsSection />;
    }
  };

  const data = [
    { type: 'flat1' },
    { type: 'categoris' },
    { type: 'dashboard' },
    { type: 'flat2' },
    { type: 'partner' },
    { type: 'inspiration' },
    { type: 'tagsSection' },
  ];


  return (
    <SafeAreaView style={style.contAll}>
      <View style={style.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.type}
        />
      </View>
    </SafeAreaView>
  );
}

export default Main;