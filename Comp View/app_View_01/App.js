/*
CAPÍTULO 2 - DESAFIOS 1 A 5
Bruno Carraro e Gustavo Lisboa
*/

// Importando biblioteca
import React from "react";

// Importando componentes react-native
import {View, Text} from 'react-native';

// Função principal - Manipulação de Views
function App() {
  return (
    <View style={{backgroundColor: '#37c5e9', height: '100%', width: '300px'}}>
      
      <View style={{backgroundColor: '#d137e9', height: '20%', width: '100%' }}>
        <Text>COMPONENTE VIEW</Text>
        <Text>Bruno Carraro e Gustavo Lisboa</Text>
        <Text>dd/mm/aaaa</Text>
      </View>

      <View style={{backgroundColor: '#99e937', height: '70%', width: '100px'}}>
        <Text>COMPONENTE VIEW</Text>
        <Text>Bruno Carraro e Gustavo Lisboa</Text>
        <Text>dd/mm/aaaa</Text>
      </View>

      <View style={{backgroundColor: '#e98737', height: '10%', width: '200px'}}>
        <Text>COMPONENTE VIEW</Text>
        <Text>Bruno Carraro e Gustavo Lisboa</Text>
        <Text>dd/mm/aaaa</Text>
      </View>

    </View>
  );
}

export default App;