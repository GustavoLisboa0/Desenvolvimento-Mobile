import React from 'react';
import { View, Text, FlatList } from 'react-native'; 
import { estilos } from './styleSheet/estilos';

export default function Cabecalho() {
  return (
    <View style={estilos.header}>
      <Text style={estilos.titulo}>COMPONENTE LISTA</Text>
    </View>
  );
}