import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* CORPO */}
      <View style={styles.corpo}>
        <Text style={styles.titulo}>Página Home</Text>
        <Text style={styles.boasVindas}>Bem-vindo(a)</Text>
        <Text style={styles.labelComponente}>COMPONENTE</Text>
        <Text style={styles.nomeComponente}>Tab Navigation</Text>
      </View>

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Bruno Carraro | Gustavo Lisboa • 18/05/2026</Text>
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