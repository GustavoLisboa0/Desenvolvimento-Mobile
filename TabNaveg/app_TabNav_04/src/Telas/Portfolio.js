import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const dados = [
  {
    title: 'Academicos',
    data: [
      { id: '1', curso: 'Desenvolvimento Mobile', inst: 'React Native e Expo', data: '2026' },
      { id: '2', curso: 'Interface de Usuario', inst: 'Componentes e estilos', data: '2026' },
    ],
  },
  {
    title: 'Projetos',
    data: [
      { id: '3', curso: 'App com Tabs', inst: 'Navegacao inferior', data: 'Desafio 01' },
      { id: '4', curso: 'App com Drawer', inst: 'Menu lateral + abas', data: 'Desafio 03' },
      { id: '5', curso: 'App com Stack', inst: 'Pilha dentro das abas', data: 'Desafio 04' },
    ],
  },
];

export default function Portfolio({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <MaterialIcons name="work" size={42} color="#1a1a2e" />
        </View>
        <Text style={styles.titulo}>Meu Portfolio</Text>
        <Text style={styles.subtitulo}>
          Esta aba possui uma Stack Navigation propria.
        </Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('DetalhesProjeto')}
          activeOpacity={0.8}
        >
          <MaterialIcons name="layers" size={22} color="#fff" />
          <Text style={styles.botaoTexto}>Abrir detalhes do projeto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoSecundario]}
          onPress={() => navigation.navigate('Formacao')}
          activeOpacity={0.8}
        >
          <MaterialIcons name="school" size={22} color="#fff" />
          <Text style={styles.botaoTexto}>Ver formacao</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={dados}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.curso}</Text>
            <Text style={styles.cardSub}>- {item.inst}</Text>
            <Text style={styles.cardSub}>- {item.data}</Text>
          </View>
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758cb4',
  },
  header: {
    alignItems: 'center',
    paddingTop: 26,
    paddingBottom: 16,
    backgroundColor: '#758cb4',
    paddingHorizontal: 20,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#b0c4de',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  subtitulo: {
    fontSize: 14,
    color: '#243b5d',
    textAlign: 'center',
    marginTop: 6,
  },
  botoes: {
    paddingHorizontal: 16,
    gap: 10,
  },
  botao: {
    backgroundColor: '#1a6ef5',
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  botaoSecundario: {
    backgroundColor: '#6a35b8',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10346e',
    marginTop: 16,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 14,
    color: '#555',
  },
});
