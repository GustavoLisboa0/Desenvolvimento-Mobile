/*
GRUPOS DE ESTILO
Bruno Carraro e Gustavo Lisboa
*/

import React from 'react';
import { View } from 'react-native';

// Adicionado o .js no final de tudo para matar as linhas vermelhas
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