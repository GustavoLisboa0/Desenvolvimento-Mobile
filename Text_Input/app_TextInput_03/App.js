/*
TEXT INPUT - DESAFIO 3
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Importando os nossos componentes
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

export default function App() {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Cabecalho />
        <Conteudo />
        <Rodape />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1691c2',
  },
  container: {
    flex: 1,
    backgroundColor: '#b4b4b4',
  }
});