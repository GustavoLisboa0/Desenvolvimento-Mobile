import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos1 } from '../styleSheet/estilos1';

export default function Rodape() {
  return (
    <View style={estilos1.footer}>
      <Image 
        source={require('../img/logo01.png')} 
        style={estilos1.logoRodape} 
      />
      <Text style={estilos1.footerTexto}>Bruno Carraro {'\n'}Gustavo Lisboa</Text>
      <Text style={estilos1.footerTexto}>04/05/2026</Text>
    </View>
  );
}