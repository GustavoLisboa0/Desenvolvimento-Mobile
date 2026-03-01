/*
CAPÍTULO 2 - DESAFIO 6
Bruno Carraro e Gustavo Lisboa
*/

// Importando biblioteca
import React from "react";

// Importando componentes react-native
import {View, Text} from 'react-native';

// Função principal - Manipulação de Views
function App() {
  return (
    <View style={{backgroundColor: '#61635c', height: '100%', width: '100%', paddingTop: 40, paddingLeft: 20}}>

      <View style={{backgroundColor: '#a2e004',width: 300, height: 100, borderWidth: 4, borderColor: 'black', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginBottom: 20, padding: 10}}>
        <Text style={{ fontSize: 18 }}>COMPONENTE VIEW</Text>
      </View>

      <View style={{backgroundColor: '#ff6600', width: 300, height: 300, borderWidth: 4, borderColor: 'black', marginBottom: 20, padding: 10}}>
        <Text style={{ fontSize: 22 }}>CONTEÚDO</Text>
      </View>

      <View style={{backgroundColor: '#0073d1', width: 300, height: 100, borderWidth: 4, borderColor: 'black', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 10}}>
        <Text>Bruno e Gustavo</Text>
        <Text>dd/mm/aaa</Text>
      </View>

    </View>
  );
}

export default App;