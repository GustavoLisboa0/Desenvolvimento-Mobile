import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos1 } from '../styleSheet/estilos1';

export default function Cabecalho() {
  return (
    <View style={estilos1.containerCabecalho}>
      <Text style={estilos1.titulo}>SECTIONLIST</Text>
      <Image 
        source={require('../img/logo01.png')} 
        style={estilos1.logo} 
      />
      <Text style={estilos1.subTitulo}>Lista de Alunos por Curso</Text>
    </View>
  );
}