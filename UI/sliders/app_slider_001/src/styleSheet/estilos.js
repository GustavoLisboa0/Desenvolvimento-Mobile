import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  // Container principal (Fundo azul claro)
  area_fundo: {
    flex: 1,
    backgroundColor: '#87CEEB', // Skyblue
    paddingTop: 40,
  },

  // Cabeçalho
  area_cabecalho: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img_cabecalho: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  titulo_cabecalho: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#800000', // Vinho/Marrom
  },

  // Conteúdo (Área amarela)
  area_conteudo: {
    flex: 1,
    backgroundColor: 'yellow',
    marginHorizontal: 15,
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  texto_conteudo: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '500',
    width: '100%',
  },
  inputNome_conteudo: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  // Sliders
  slider1: {
    width: '100%',
    height: 40,
    marginBottom: 10,
  },

  // Botão Circular (Clique Aqui)
  botao: {
    backgroundColor: '#800000',
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 2,
    borderColor: 'orange',
  },
  texto_botao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },

  // Rodapé
  area_rodape: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#87CEEB',
  },
  texto_rodape: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
});