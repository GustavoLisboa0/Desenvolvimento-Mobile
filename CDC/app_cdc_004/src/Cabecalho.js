import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './styleSheet/estilos.js';

function Cabecalho() {
  let img1 = require('../img/logo.png');

  return (
    <View id='cabecalho' style={estilos.cabecalho}>
      <Text style={estilos.cabTitulo}>NOTÍCIAS</Text>
      
      <View style={{ backgroundColor: '#ff9999', borderRadius: 50, padding: 10 }}>
         <Image source={img1} style={{ width: 60, height: 60, resizeMode: 'contain' }} />
      </View>
      
      <Text style={estilos.cabSubTitulo}>SEU PORTAL DE NOTÍCIAS</Text>
    </View>
  );
}

export default Cabecalho;