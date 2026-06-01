import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function TelaPerfil() {
  const nav   = useNavigation();
  const rota  = useRoute();
  const { usuario } = rota.params;

  const campos = [
    { icone: '👤', label: 'Nome',              valor: usuario.nome     },
    { icone: '✉️',  label: 'E-mail',            valor: usuario.email    },
    { icone: '📱', label: 'Telefone',           valor: usuario.telefone },
    { icone: '🎂', label: 'Data de Nascimento', valor: usuario.dataNasc },
    { icone: '🔑', label: 'Login',              valor: usuario.login    },
  ];

  return (
    <View style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Topo */}
        <View style={styles.topo}>
          <View style={styles.avatarCirculo}>
            <Text style={styles.avatarLetra}>
              {usuario.nome.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.boasVindas}>
            Olá, {usuario.nome.split(' ')[0]}!!
          </Text>
          <Text style={styles.boasVindasSub}>Seja bem-vindo(a)! 🎉</Text>
        </View>

        {/* Card de dados */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Seus Dados Cadastrados</Text>

          {campos.map((c) => (
            <View key={c.label} style={styles.campoRow}>
              <Text style={styles.campoIcone}>{c.icone}</Text>
              <View style={styles.campoInfo}>
                <Text style={styles.campoLabel}>{c.label}</Text>
                <Text style={styles.campoValor}>{c.valor}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Botão sair */}
        <TouchableOpacity
          style={styles.botaoSair}
          onPress={() => nav.navigate('TelaLogin')}
          activeOpacity={0.85}
        >
          <Text style={styles.botaoSairTexto}>Sair</Text>
        </TouchableOpacity>

        {/* Rodapé */}
        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>Maio / 2026</Text>
        </View>

      </ScrollView>
    </View>
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
  },
  avatarCirculo: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 14, borderWidth: 3, borderColor: '#fff',
  },
  avatarLetra: { fontSize: 38, fontWeight: '900', color: '#fff' },

  boasVindas: {
    fontSize: 30, fontWeight: '700', color: '#fff', textAlign: 'center',
  },
  boasVindasSub: {
    fontSize: 16, color: '#e0c0c0', marginTop: 6,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    borderRadius: 22,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  cardTitulo: {
    fontSize: 16, fontWeight: '700', color: VERMELHO,
    marginBottom: 20, letterSpacing: 0.4,
  },

  campoRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: '#f0e0e0',
    gap: 14,
  },
  campoIcone: { fontSize: 22, width: 28, textAlign: 'center' },
  campoInfo: { flex: 1 },
  campoLabel: { fontSize: 12, color: '#aaa', fontWeight: '600', marginBottom: 2 },
  campoValor: { fontSize: 16, color: '#222', fontWeight: '500' },

  botaoSair: {
    backgroundColor: VERMELHO_BOTAO,
    borderRadius: 40,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 24,
    marginBottom: 4,
    elevation: 4,
  },
  botaoSairTexto: { color: '#fff', fontSize: 22, fontWeight: '600' },

  rodape: {
    flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor: VERMELHO,
    paddingHorizontal: 24, paddingVertical: 16, marginTop: 20,
  },
  rodapeTexto: { color: '#e0c0c0', fontSize: 14 },
});