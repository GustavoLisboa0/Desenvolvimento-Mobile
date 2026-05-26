import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const navegacoes = [
  {
    titulo: 'Drawer Navigation',
    texto: 'Fica na raiz e abre o menu lateral do aplicativo.',
    icone: 'menu',
  },
  {
    titulo: 'Tab Navigation',
    texto: 'Aparece nas abas inferiores com Home, Portfolio e Contato.',
    icone: 'tab',
  },
  {
    titulo: 'Stack Navigation',
    texto: 'Esta dentro da aba Portfolio e abre telas de detalhes.',
    icone: 'layers',
  },
];

export default function Sobre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Desafio 04</Text>
      <Text style={styles.descricao}>
        Projeto app_TabNav_04 montado a partir do App_TabNav_01 e evoluido com
        Drawer, Tabs e Stack Navigation no mesmo aplicativo.
      </Text>

      {navegacoes.map((item) => (
        <View key={item.titulo} style={styles.card}>
          <MaterialIcons name={item.icone} size={30} color="#1a6ef5" />
          <View style={styles.cardTextos}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardTexto}>{item.texto}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce8f5',
  },
  content: {
    padding: 22,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 22,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  cardTextos: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  cardTexto: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
