import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const itens = [
  'Drawer Navigation controla o menu lateral do aplicativo.',
  'Tab Navigation organiza as telas Home, Portfolio e Contato.',
  'Stack Navigation foi colocada dentro da aba Portfolio.',
  'Os botoes do Portfolio empilham esta tela e a tela de Formacao.',
];

export default function DetalhesProjeto() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.cardDestaque}>
        <MaterialIcons name="layers" size={42} color="#fff" />
        <Text style={styles.titulo}>Projeto app_TabNav_04</Text>
        <Text style={styles.subtitulo}>
          Exemplo simples para demonstrar os tres tipos de navegacao no mesmo app.
        </Text>
      </View>

      {itens.map((item) => (
        <View key={item} style={styles.card}>
          <MaterialIcons name="check-circle" size={22} color="#1a6ef5" />
          <Text style={styles.texto}>{item}</Text>
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
    padding: 20,
    paddingBottom: 36,
  },
  cardDestaque: {
    backgroundColor: '#1a6ef5',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 18,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 15,
    color: '#eaf1ff',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  texto: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});
