/*
CAPÍTULO 2 - DESAFIOS DE 7 A 8
Bruno Carraro e Gustavo Lisboa
*/

// Importando biblioteca
import React from "react";

// Importando componentes react-native
import {View, Text} from 'react-native';

// Função principal - Manipulação de Views
function App() {
  return (
    <View style={{flex: 1, marginTop: 50, padding: 50, backgroundColor: '#5f5d5d', flexDirection: 'row'}}>

      <View style={{width: 300, height: 300, backgroundColor: '#488a1d'}}></View>

      <View style={{width: 300, height: 300, backgroundColor: '#ff5550'}}></View>

      <View style={{width: 300, height: 300, backgroundColor: '#e2cd0e'}}></View>

    </View>
  );
}

export default App;