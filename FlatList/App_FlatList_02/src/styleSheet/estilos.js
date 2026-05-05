import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#B2CBE2',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  pais: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  capital: {
    fontSize: 14,
    color: '#555',
  },
  separador: {
    height: 10,
    width: '100%',
  },
  cabecalhoLista: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#000',
  },
  rodapeLista: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
});