import { StyleSheet, Platform, StatusBar } from 'react-native';

export const estilos1 = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#427792',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 50,
    paddingHorizontal: 20,
  },
  containerPrincipal: {
    flex: 1,
    justifyContent: 'space-between',
  },

  containerCabecalho: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center';
  },
  subTitulo: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  logo: {
    width: 60,
    height: 60,
    marginVertical: 10,
    resizeMode: 'contain',
  },

  cabecalhoGeral: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    marginTop: 10
  },

  cabecalhoSessao: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    margin: 15
  },
  cabTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  nome: {
    fontSize: 16,
    color: '#000',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    marginTop: 10,
  },
  logoRodape: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  footerTexto: {
    fontSize: 14,
    color: '#333',
  }
});