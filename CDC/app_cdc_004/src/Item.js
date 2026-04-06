import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './styleSheet/estilos';

function Item(props) {
  return (
    <View style={estilos.itemCorpo}>
      <Image source={props.imagem} style={{ width: 50, height: 50, marginRight: 10 }} />
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{props.titulo}</Text>
        <Text>{props.manchete}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>{props.data}</Text>
      </View>
    </View>
  );
}

export default Item;