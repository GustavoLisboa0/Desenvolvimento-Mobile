/*
TEXT INPUT - DESAFIO 1
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Função principal - Text Input
export default function App() {
  const [saudacao, setSaudacao] = useState('');

  const capturaNome = (texto_digitado) => {
    if (texto_digitado.length > 0) {
      setSaudacao('Olá, ' + texto_digitado + '!');
    } else {
      setSaudacao(''); 
    }
  };

  return (
    <View style={estilos.container}>
      
      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.capituloText}>Capitulo 06</Text>
        <Text style={estilos.tituloText}>DSV MOBILE</Text>
        <Text style={estilos.subtituloText}>Componente TextInput</Text>
      </View>

      {/* Input */}
      <View style={estilos.inputContainer}>
        <Text style={estilos.label}>Digite o seu nome:</Text>
        
        {/* Componente TextInput */}
        <TextInput
          style={estilos.input}
          placeholder="Digite algo..."
          onChangeText={(texto_digitado) => capturaNome(texto_digitado)}
        />
      </View>

      {/* Saudação */}
      <View style={estilos.saudacaoContainer}>
        <Text style={estilos.saudacaoText}>{saudacao}</Text>
      </View>

    </View>
  );
}

{/* Estilos */ }
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 30,
  },
  header: {
    backgroundColor: '#CCCCCC',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  capituloText: {
    color: '#8B0000',
    fontSize: 22,
    marginBottom: 10,
  },
  tituloText: {
    color: '#000000',
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 10,
  },
  subtituloText: {
    color: '#0000FF',
    fontSize: 24,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#FFA500',
    borderRadius: 4,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
  },
  saudacaoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  saudacaoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  }
});