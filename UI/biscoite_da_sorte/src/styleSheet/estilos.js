import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  areaFundo: {
    flex: 1,
    marginHorizontal: 10, paddingTop: 30,
    alignItems: 'center', justifyContent: "center"
  },
  areaTitulo: {
    height: 70, width: 380, backgroundColor: 'orange',
    borderRadius: 20, alignItems: "center", justifyContent: 'center'
  },
  titulo: {
    fontSize: 30, fontWeight: 'bold', color: 'white'
  },
  textoFrase: {
    color: 'darkblue', fontSize: 18, fontStyle: 'italic',
    marginBottom: 30, textAlign: "center"
  },
  areaImg: {
    flex: 0.8, justifyContent: 'center'
  },
  img: {
    width: 300, height: 300
  },
  botao: {
    width: 230, height: 50, borderWidth: 2, borderColor: 'orange',
    borderRadius: 25
  },
  areaBotao: {
    flex: 1, flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontWeight: 'bold', color: 'orange'
  },
});

export { estilos };