import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.corpo}>
        <Text style={styles.titulo}>Pagina Home</Text>
        <Text style={styles.boasVindas}>Bem-vindo(a)</Text>
        <Text style={styles.labelComponente}>COMPONENTES</Text>
        <Text style={styles.nomeComponente}>Drawer + Tab + Stack</Text>
        <Text style={styles.descricao}>
          Use o menu lateral para acessar o desafio. Nas abas inferiores, abra
          Portfolio para navegar por pilha.
        </Text>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Bruno Carraro | Gustavo Lisboa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce8f5',
    justifyContent: 'space-between',
  },
  corpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
  },
  boasVindas: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  labelComponente: {
    fontSize: 12,
    color: '#888',
    letterSpacing: 2,
    marginTop: 24,
  },
  nomeComponente: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a6ef5',
    textAlign: 'center',
  },
  descricao: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 14,
  },
  rodape: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 14,
    alignItems: 'center',
  },
  rodapeTexto: {
    color: '#fff',
    fontSize: 14,
  },
});
