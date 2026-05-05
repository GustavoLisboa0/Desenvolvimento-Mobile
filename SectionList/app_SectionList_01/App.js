import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { estilos1 } from './src/styleSheet/estilos1';
import Conteudo from './src/componentes/Conteudo';

export default function App() {
  return (
    <SafeAreaView style={estilos1.fundo}>
      {/* Título Principal da Tela */}
      <Text style={estilos1.cabecalhoGeral}>Lista de Alunos por Curso</Text>
      
      {/* Componente com a SectionList */}
      <Conteudo />
    </SafeAreaView>
  );
}