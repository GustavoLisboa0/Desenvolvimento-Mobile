import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.header}>
      <Text style={styles.subTitle}>Capítulo 06 - Componentes UI</Text>
      <Text style={styles.title}>TouchableHighlight || TextInput</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4766a9',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});