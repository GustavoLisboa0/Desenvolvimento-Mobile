import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  // Pegando a data atual dinamicamente
  const hoje = new Date();
  const dia = hoje.getDate().toString().padStart(2, '0');
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
  const ano = hoje.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return (
    <View style={styles.footer}>
      <Text style={styles.nomeText}>Bruno Carraro e Gustavo Lisboa</Text>
      <Text style={styles.dataText}>12/04/2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#4766a9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  nomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  dataText: {
    fontSize: 16,
    color: '#000000',
  }
});