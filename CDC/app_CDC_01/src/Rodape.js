import React from 'react';
import { View, Text } from 'react-native';
import estilos from './styleSheet/estilos';

function Rodape() {
  // Variáveis conforme o exercício
  let autor = "Gustavo e Bruno";
  let data = "dd/mm/aaaa";

  return (
    <View id='rodape' style={estilos.rodape}>
      <Text style={estilos.rodAutor}>{autor}</Text>
      <Text style={estilos.rodAutor}>{data}</Text>
    </View>
  );
}

export default Rodape;