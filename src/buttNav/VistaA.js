import React from 'react';
import { View, Text, FlatList, StyleSheet, Animated } from 'react-native';

const AnimatedFlatlistItem = ({ item }) => {
  const translateX = new Animated.Value(0);

  // Configura la animación
  Animated.loop(
    Animated.timing(translateX, {
      toValue:  20, // Desplazamiento vertical
      duration: 2000, // Duración de la animación (2 segundos)
      useNativeDriver: true,
    })
  ).start();

  return (
    <Animated.View style={[styles.item, { transform: [{ translateX }] }]}>
      <Text>
        Hello
      </Text>
    </Animated.View>
  );
};

const App = () => {
  const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

  return (
    <View style={styles.container}>
      <FlatList
      snapToInterval={100}
        horizontal
        data={data}
        renderItem={({ item }) => <AnimatedFlatlistItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    height: 100,
    width: '100vw',
    backgroundColor: '#34B7F1',
    marginVertical: 20,
    borderRadius: 15,
    alignSelf: 'center',
  },
});

export default App;