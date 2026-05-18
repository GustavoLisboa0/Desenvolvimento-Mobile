import { View, Text, SectionList, StyleSheet, Image } from 'react-native';

const dados = [
  {
    title: 'Acadêmicos',
    data: [
      { id: '1', curso: 'Engenharia Eletrônica', inst: 'UTFPR (Graduação)', data: '10/03/2000' },
      { id: '2', curso: 'Administração de TI', inst: 'FAE Business School (Especialização)', data: '30/04/2005' },
      { id: '3', curso: 'Educação e Novas Tecnologias', inst: 'UNINTER (Mestrado)', data: '11/06/2016' },
    ],
  },
  {
    title: 'Projetos Web',
    data: [
      { id: '4', curso: 'E-commerce React', inst: 'Projeto Pessoal', data: '2022' },
      { id: '5', curso: 'Dashboard Analytics', inst: 'Projeto Freelancer', data: '2023' },
    ],
  },
  {
    title: 'Projetos Mobile',
    data: [
      { id: '6', curso: 'App de Delivery', inst: 'React Native', data: '2023' },
      { id: '7', curso: 'App de Finanças', inst: 'Expo', data: '2024' },
    ],
  },
  {
    title: 'Idiomas',
    data: [
      { id: '8', curso: 'Inglês', inst: 'Avançado (C1)', data: '' },
      { id: '9', curso: 'Espanhol', inst: 'Intermediário (B2)', data: '' },
    ],
  },
];

export default function Portfolio() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>👤</Text>
        </View>
        <Text style={styles.titulo}>Meu Portfólio</Text>
      </View>

      {/* Lista */}
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
            {item.data ? <Text style={styles.cardSub}>- {item.data}</Text> : null}
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
    paddingTop: 48,
    paddingBottom: 16,
    backgroundColor: '#758cb4',
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
  avatarEmoji: {
    fontSize: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
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
    borderRadius: 10,
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