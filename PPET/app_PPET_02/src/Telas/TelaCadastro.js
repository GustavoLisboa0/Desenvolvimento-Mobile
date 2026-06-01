import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bancoDados } from './TelaLogin';

export default function TelaCadastro() {
  const nav = useNavigation();

  const [nome,     setNome]     = useState('');
  const [email,    setEmail]    = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [login,    setLogin]    = useState('');
  const [senha,    setSenha]    = useState('');
  const [confirma, setConfirma] = useState('');

  function cadastrar() {
    if (!nome || !email || !telefone || !dataNasc || !login || !senha || !confirma) {
      Alert.alert('Atenção', 'Preencha todos os campos para continuar.');
      return;
    }
    if (senha !== confirma) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }
    const loginExiste = bancoDados.find((u) => u.login === login.trim());
    if (loginExiste) {
      Alert.alert('Atenção', 'Este login já está em uso. Escolha outro.');
      return;
    }

    const novoUsuario = {
      nome:     nome.trim(),
      email:    email.trim(),
      telefone: telefone.trim(),
      dataNasc: dataNasc.trim(),
      login:    login.trim(),
      senha:    senha.trim(),
    };

    // Grava no banco em memória (mesmo array que TelaLogin usa)
    bancoDados.push(novoUsuario);

    Alert.alert('Sucesso!', `Conta criada para ${nome}. Faça login para continuar.`, [
      { text: 'OK', onPress: () => nav.navigate('TelaLogin') },
    ]);
  }

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

        {/* Topo */}
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>Criar Conta</Text>
          <Text style={styles.topoSub}>Preencha seus dados para se cadastrar</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>

          {[
            { label: 'Nome Completo',   value: nome,     set: setNome,     placeholder: 'Digite seu nome',         keyboard: 'default',       secure: false },
            { label: 'E-mail',          value: email,    set: setEmail,    placeholder: 'Digite seu e-mail',       keyboard: 'email-address', secure: false },
            { label: 'Telefone',        value: telefone, set: setTelefone, placeholder: '(XX) 99999-9999',         keyboard: 'phone-pad',     secure: false },
            { label: 'Data Nascimento', value: dataNasc, set: setDataNasc, placeholder: 'DD/MM/AAAA',              keyboard: 'default',       secure: false },
            { label: 'Login',           value: login,    set: setLogin,    placeholder: 'Escolha um login único',  keyboard: 'default',       secure: false },
            { label: 'Senha',           value: senha,    set: setSenha,    placeholder: 'Crie uma senha',          keyboard: 'default',       secure: true  },
            { label: 'Confirmar Senha', value: confirma, set: setConfirma, placeholder: 'Repita a senha',          keyboard: 'default',       secure: true  },
          ].map((campo) => (
            <View key={campo.label}>
              <Text style={styles.label}>{campo.label}</Text>
              <TextInput
                style={styles.input}
                placeholder={campo.placeholder}
                placeholderTextColor="#aaa"
                value={campo.value}
                onChangeText={campo.set}
                keyboardType={campo.keyboard}
                secureTextEntry={campo.secure}
                autoCapitalize="none"
              />
            </View>
          ))}

          <TouchableOpacity style={styles.botao} onPress={cadastrar} activeOpacity={0.85}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => nav.goBack()} activeOpacity={0.7}>
            <Text style={styles.linkVoltar}>← Voltar para o Login</Text>
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

  scroll: { flexGrow: 1, justifyContent: 'space-between' },

  topo: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  topoTitulo: {
    fontSize: 36, fontWeight: '600', color: '#fff', marginBottom: 6,
  },
  topoSub: {
    fontSize: 14, color: '#e0c0c0', textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    borderRadius: 22,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 32,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  label: {
    fontSize: 18, fontWeight: '600', color: '#111',
    marginTop: 18, marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1.5, borderBottomColor: '#bbb',
    fontSize: 15, color: '#333', paddingVertical: 8,
    fontStyle: 'italic',
  },

  botao: {
    backgroundColor: VERMELHO_BOTAO,
    borderRadius: 40,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 10,
    elevation: 4,
  },
  botaoTexto: { color: '#fff', fontSize: 22, fontWeight: '600' },

  linkVoltar: {
    textAlign: 'center', color: VERMELHO_BOTAO,
    fontSize: 15, marginTop: 12, fontWeight: '500',
  },

  rodape: {
    flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor: VERMELHO,
    paddingHorizontal: 24, paddingVertical: 16, marginTop: 20,
  },
  rodapeTexto: { color: '#e0c0c0', fontSize: 14 },
});