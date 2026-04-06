import React from "react";
import {View, Image, Text} from 'react-native';
import Cabecalho from "./src/Componentes/Cabecalho";
import Conteudo from "./src/Componentes/Conteudo";
import { estilos } from "./src/styleSheet/estilo";

function App(){
  return(
    <View style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}

export default App;