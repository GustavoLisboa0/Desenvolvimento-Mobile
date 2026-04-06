import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from '../styleSheet/estilo';

function Cabecalho(){
  let img_logo = require('../imagens/logo.png');
  return(
    <View style={estilos.cabecalho}>
      <Image source={img_logo}
        style={{width:200, height:100, resizeMode:'repeat',
        borderWidth:3, marginTop:20}} />
      <Text style={estilos.subtitulo}>DSV - MOBILE</Text>
    </View>
  );
}

export default Cabecalho;