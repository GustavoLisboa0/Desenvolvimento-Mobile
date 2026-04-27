import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Azul claro de fundo
    paddingTop: 30,
  },
  area_cabecalho: {
    alignItems: 'center',
    marginVertical: 20,
  },
  titulo_cabecalho: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
  },
  area_conteudo: {
    flex: 1,
    marginHorizontal: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#6495ED',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ADD8E6',
    padding: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#FFD700', // Borda dourada como no print
    backgroundColor: '#FFF',
    marginBottom: 15,
  },
  img_estrela: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  inputComentario: {
    borderWidth: 1,
    borderColor: '#000',
    height: 80,
    textAlignVertical: 'top',
    padding: 10,
    marginVertical: 15,
  },
  botaoAvaliar: {
    backgroundColor: 'red',
    padding: 10,
    width: 120,
    alignSelf: 'center',
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  area_resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
  texto_resultado: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  }
});