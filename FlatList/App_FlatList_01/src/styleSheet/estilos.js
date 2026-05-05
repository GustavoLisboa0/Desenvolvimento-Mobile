import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '95%',          
    height: '95%',         
    backgroundColor: '#81D4FA',
    borderRadius: 25,
    padding: 12,
    justifyContent: 'space-between',
  },
  header: {
    height: 140,
    backgroundColor: '#B2EBF2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    color: '#800000',
    fontWeight: '400',
  },
  corpoLista: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 12,
    borderRadius: 20,
    padding: 20,
  },
  listaBranca: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  itemTexto: {
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
  },
  footer: {
    minHeight: 80,         
    backgroundColor: '#B2EBF2',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,   
  },
  footerTexto: {
    fontSize: 14,          
    color: '#000',
    flex: 1,               
  },
});