import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Alert, Platform } from 'react-native';
import { estilos1 } from '../styleSheet/estilos1';
import dados_Alunos from '../dados/alunos.json';

export default function Conteudo() {
  
  function mostrarDetalhes(aluno) {
    const mensagem = `CPF: ${aluno.cpf}\nNascimento: ${aluno.nascimento}\nAno: ${aluno.ano}`;

    if (Platform.OS === 'web') {
      alert(`${aluno.nome}\n\n${mensagem}`);
    } else {
      Alert.alert(aluno.nome, mensagem);
    }
  }

  return (
    <SectionList
      sections={dados_Alunos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={estilos1.item} 
          onPress={() => mostrarDetalhes(item)}
        >
          <Text style={estilos1.nome}>{item.nome}</Text>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section }) => (
        <View style={estilos1.cabecalhoSessao}>
          <Text style={estilos1.cabTexto}>{section.title}</Text>
        </View>
      )}
      stickySectionHeadersEnabled={false}
    />
  );
}