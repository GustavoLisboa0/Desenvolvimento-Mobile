import React from 'react';
import { View, Text } from 'react-native';
import estilos from './styleSheet/estilos';

function Rodape() {
  let autor = "Bruno Carraro";
  let data = "06/04/2026";

  return (
    <View id='rodape' style={estilos.rodape}>
      <Text style={estilos.rodAutor}>{autor}</Text>
      <Text style={estilos.rodAutor}>{data}</Text>
    </View>
  );
}

export default Rodape;