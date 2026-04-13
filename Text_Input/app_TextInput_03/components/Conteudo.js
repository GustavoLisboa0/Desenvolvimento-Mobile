import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

// ARRAY DE PERSONAGENS
const arrayPersonagens = [
  { id: 1, nome: 'Bart', img: require('../src/img/Bart.jpg') },
  { id: 2, nome: 'Mickey', img: require('../src/img/Mickey-Mouse.jpg') },
  { id: 3, nome: 'Pica Pau', img: require('../src/img/Pica-Pau.png') }
];

export default function Conteudo() {
  const [personagemAtual, setPersonagemAtual] = useState(null);
  const [textoDigitado, setTextoDigitado] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Sorteia um personagem aleatório do Array
  const sortearPersonagem = () => {
    const indiceAleatorio = Math.floor(Math.random() * arrayPersonagens.length);
    setPersonagemAtual(arrayPersonagens[indiceAleatorio]);
    setTextoDigitado('');
    setMensagem('');
  };

  useEffect(() => {
    sortearPersonagem();
  }, []);

  // Verifica se o texto digitado é o nome do personagem
  const verificarResposta = () => {
    const respostaCerta = personagemAtual.nome.toLowerCase();
    const respostaUser = textoDigitado.trim().toLowerCase();

    if (respostaUser === respostaCerta) {
      setMensagem('Acertou!');
    } else {
      setMensagem('Errou! Tente novamente.');
    }
  };

  // Previne erro caso o personagem ainda não tenha carregado
  if (!personagemAtual) return null;

  return (
    <View style={styles.conteudoContainer}>
      <Text style={styles.tituloGame}>Acerte o Personagem</Text>

      <Image 
        source={personagemAtual.img} 
        style={styles.imagemPersonagem} 
        resizeMode="contain"
      />

      {/* Campo de Texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do personagem"
        value={textoDigitado}
        onChangeText={(texto) => setTextoDigitado(texto)}
      />

      {/* Botão Verificar */}
      <TouchableHighlight 
        style={styles.btnVerificar} 
        underlayColor="#388E3C"
        onPress={verificarResposta}
      >
        <Text style={styles.btnTexto}>Verificar</Text>
      </TouchableHighlight>

      {/* Mensagem de Acerto/Erro */}
      <Text style={styles.mensagemTexto}>{mensagem}</Text>

      {/* Botão Próximo */}
      <TouchableHighlight 
        style={styles.btnProximo} 
        underlayColor="#1976D2" 
        onPress={sortearPersonagem}
      >
        <Text style={styles.btnTexto}>Próximo</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  conteudoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  tituloGame: {
    fontSize: 26,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  imagemPersonagem: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF', 
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
    color: '#000000',
  },
  btnVerificar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15,
  },
  btnProximo: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  btnTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mensagemTexto: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 15,
    height: 25,
    fontWeight: 'bold',
  }
});