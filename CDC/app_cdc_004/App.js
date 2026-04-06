import React from 'react';
import { View } from 'react-native';
import estilos from './src/styleSheet/estilos.js';
import Cabecalho from './src/Cabecalho.js';
import Conteudo from './src/Conteudo.js';
import Rodape from './src/Rodape.js';

export default function App() {
  return (
    <View id="View01" style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
