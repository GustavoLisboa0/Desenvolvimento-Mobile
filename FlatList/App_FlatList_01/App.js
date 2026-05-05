/*
FLATLIST - DESAFIO 01
Bruno Carraro e Gustavo Lisboa
*/

import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './src/styleSheet/estilos';
import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Cabecalho />
        <Conteudo />
        <Rodape />
      </View>
    </View>
  );
}