import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  // Estilo para o Modo Noturno (Escuro e Centralizado)
  area_fundo1: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#222', 
    padding: 20
  },
  // Estilo para o Modo Claro (Branco e Alinhado ao topo/esquerda)
  area_fundo2: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    backgroundColor: '#ffffff', 
    padding: 20
  },
  textoEstilo1: {
    fontSize: 24, 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 10
  },
  textoEstilo2: {
    fontSize: 30, 
    color: '#000', 
    textAlign: 'left', 
    marginBottom: 10
  },
  imgEstilo1: {
    width: 300, 
    height: 300
  },
  imgEstilo2: {
    width: 100, 
    height: 100
  },
});

export { estilos };