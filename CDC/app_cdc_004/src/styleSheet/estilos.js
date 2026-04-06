import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingTop: 35,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  cabecalho: {
    backgroundColor: 'darkred',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 5,
    borderBottomColor: 'yellow',
  },
  cabTitulo: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  cabSubTitulo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  corpo: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemCorpo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 80,
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  rodape: {
    backgroundColor: 'darkred',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50,
  },
  rodAutor: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default estilos;