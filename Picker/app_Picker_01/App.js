/*
PICKER - DESAFIO 01
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from "react";
import { View } from "react-native";

// Importando componentes
import Cabecalho from "./src/components/cabecalho";
import Conteudo from "./src/components/conteudo";
import Rodape from "./src/components/rodape";

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#7ec8e3' }}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}

export default App;