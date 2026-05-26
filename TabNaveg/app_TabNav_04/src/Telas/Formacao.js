import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const formacoes = [
  {
    titulo: 'React Native',
    descricao: 'Componentes, propriedades, estados e estilos.',
  },
  {
    titulo: 'React Navigation',
    descricao: 'Drawer, Bottom Tabs e Native Stack trabalhando juntos.',
  },
  {
    titulo: 'Expo',
    descricao: 'Estrutura do projeto, scripts e execucao no ambiente mobile.',
  },
];

export default function Formacao() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Formacao e Estudos</Text>

      {formacoes.map((item) => (
        <View key={item.titulo} style={styles.card}>
          <View style={styles.icone}>
            <MaterialIcons name="school" size={28} color="#6a35b8" />
          </View>
          <View style={styles.textos}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardTexto}>{item.descricao}</Text>
          </View>
        </View>
      ))}
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
    paddingBottom: 36,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 20,
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
  icone: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#eee5ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textos: {
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
