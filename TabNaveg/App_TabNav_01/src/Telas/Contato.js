import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviar = () => {
    if (!nome.trim() || !mensagem.trim()) {
      Alert.alert('Atenção', 'Preencha nome e mensagem antes de enviar.');
      return;
    }
    Alert.alert('Mensagem Enviada!', `Obrigado, ${nome}! Retornaremos em breve.`);
    setNome('');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.tituloPagina}>Entre em Contato</Text>

      {/* Informações */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Informações de Contato</Text>
        <Text style={styles.info}>Celular: (41) 99999-9999</Text>
        <Text style={styles.info}>Email: professor@email.com</Text>
        <Text style={styles.info}>LinkedIn: linkedin.com/in/professor</Text>
        <Text style={styles.info}>Instagram: @professor.dev</Text>
        <Text style={styles.info}>YouTube: youtube.com/@canaldev</Text>
        <Text style={styles.info}>Curitiba - PR</Text>
      </View>

      {/* Formulário */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Enviar Mensagem</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#aaa"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          value={mensagem}
          onChangeText={setMensagem}
        />

        <TouchableOpacity style={styles.botao} onPress={enviar}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758cb4',
  },
  content: {
    padding: 20,
    paddingTop: 48,
    paddingBottom: 40,
  },
  tituloPagina: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  info: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
    backgroundColor: '#d4d0d0',
  },
  textArea: {
    height: 120,
  },
  botao: {
    backgroundColor: '#1a6ef5',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});