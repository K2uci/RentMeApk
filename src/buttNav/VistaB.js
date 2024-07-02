import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { StyleSheet , ScrollView  } from 'react-native';

const Plegable = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleCollapsed}>
        <Text>Mostrar/Ocultar</Text>
      </TouchableOpacity>
      <Collapsible 
        collapsed={collapsed}>
        <View>
          <Text>Contenido plegable aquí...</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default Plegable;
