import React from 'react';
import { View, Text } from 'react-native';
import estilos from './styleSheet/estilos';

function Item(props) {
  return (
    <View style={[estilos.itemCorpo, { backgroundColor: props.corFundo }]}>
      <Text style={{ color: props.corTexto, fontSize: 20 }}>
        {props.texto}
      </Text>
    </View>
  );
}

export default Item;