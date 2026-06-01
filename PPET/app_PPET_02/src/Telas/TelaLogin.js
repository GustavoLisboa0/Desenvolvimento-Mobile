import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usuariosIniciais from '../../usuarios.json';

// Banco de dados em memória (começa com o JSON, recebe novos cadastros)
export let bancoDados = [...usuariosIniciais];

export default function TelaLogin() {
  const nav = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function acessar() {
    if (!login.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha o login e a senha antes de continuar.');
      return;
    }

    const usuario = bancoDados.find(
      (u) => u.login === login.trim() && u.senha === senha.trim()
    );

    if (usuario) {
      nav.navigate('TelaPerfil', { usuario });
    } else {
      Alert.alert('Acesso Negado', 'Login ou senha incorretos. Tente novamente.');
      setSenha('');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

        {/* Topo vermelho */}
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>Bem-Vindo</Text>
        </View>

        {/* Card branco */}
        <View style={styles.card}>

          <Text style={styles.label}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            keyboardType="email-address"
            value={login}
            onChangeText={setLogin}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu Número de Matrícula"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.botaoAcessar} onPress={acessar} activeOpacity={0.85}>
            <Text style={styles.botaoAcessarTexto}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => nav.navigate('TelaCadastro')} activeOpacity={0.7}>
            <Text style={styles.linkCriarConta}>Criar Conta</Text>
          </TouchableOpacity>

        </View>

        {/* Rodapé */}
        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>Luiz Fernando Corcini</Text>
          <Text style={styles.rodapeTexto}>2022</Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const VERMELHO       = '#8b0000';
const VERMELHO_BOTAO = '#a01010';

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: VERMELHO },

  scroll: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  topo: {
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 40,
  },
  topoTitulo: {
    fontSize: 38,
    fontWeight: '600',
    color: '#fff',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    borderRadius: 22,
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 36,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  label: {
    fontSize: 26,
    fontWeight: '500',
    color: '#111',
    marginBottom: 4,
    marginTop: 16,
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#bbb',
    fontSize: 18,
    color: '#333',
    paddingVertical: 8,
    fontStyle: 'italic',
  },

  botaoAcessar: {
    backgroundColor: VERMELHO_BOTAO,
    borderRadius: 40,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  botaoAcessarTexto: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
  },

  linkCriarConta: {
    textAlign: 'center',
    color: VERMELHO_BOTAO,
    fontSize: 17,
    marginTop: 14,
    fontWeight: '500',
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: VERMELHO,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 20,
  },
  rodapeTexto: {
    color: '#e0c0c0',
    fontSize: 14,
  },
});