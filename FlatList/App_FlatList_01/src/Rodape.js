import React from 'react';
import { View, Text, FlatList } from 'react-native'; 
import { estilos } from './styleSheet/estilos';

export default function Rodape() {
  return (
    <View style={estilos.footer}>
      <Text style={estilos.footerTexto}>Bruno Carraro {'\n'}Gustavo Lisboa</Text>
      <Text style={estilos.footerTexto}>04/05/2026</Text>
    </View>
  );
}