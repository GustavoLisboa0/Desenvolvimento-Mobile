import React from 'react';
import { View, Text, FlatList } from 'react-native'; 
import { estilos } from './styleSheet/estilos';

export default function Conteudo() {
  const dados = [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
    { id: '4', nome: 'Ana' },
  ];

  const recuperaId = (item) => item.id;

  const mostraItem = ({ item }) => (
    <Text style={estilos.itemTexto}>{item.nome}</Text>
  );

  return (
    <View style={estilos.corpoLista}>
      <FlatList
        style={estilos.listaBranca}
        data={dados}
        keyExtractor={recuperaId}
        renderItem={mostraItem}
      />
    </View>
  );
}