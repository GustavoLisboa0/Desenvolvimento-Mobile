/*
LAÇOS DE REPETIÇÃO - DESAFIO 2
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from 'react';
import { View, Text } from 'react-native';

// Função principal - Laços de repetição
function App() {
  let Txt = null;
  let i = 0;
  let retorno = "Número";
  
  while (i < 3) {
    Txt = (
      <>
        {Txt}
        <View style={{ backgroundColor: '#1ec6e3', margin: 10, width: '95%' }}>
          <Text> {retorno} {i + 1}</Text>
        </View>
      </>
    )
    i++;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>
        {Txt}
      </Text>
    </View>
  );
}

export default App;