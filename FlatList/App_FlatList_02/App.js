/*
FLATLIST - DESAFIO 02
Bruno Carraro e Gustavo Lisboa
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './src/componentes/Cabecalho';
import Conteudo from './src/componentes/Conteudo';
import Rodape from './src/componentes/Rodape';
import { estilos } from './src/styleSheet/estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={{
          width: '90%', 
          height: '95%', 
          backgroundColor: '#F0F0F0', 
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#DDD'
      }}>
        <Cabecalho />
        <Conteudo />
        <Rodape />
      </View>
    </View>
  );
}