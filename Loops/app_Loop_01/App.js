/*
LAÇOS DE REPETIÇÃO - DESAFIO 1
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from 'react';
import { View, Text } from 'react-native';

// Função principal - Laços de repetição
function App() {
  let elementos = null;

  for (let i = 0; i < 3; i++) {
    elementos = (
      <>
        {elementos}
        <View style={{ backgroundColor: '#1ec6e3', margin: 10, padding: 10 }}>
          <Text> Item {i + 1}</Text>
        </View>
      </>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {elementos}
    </View>
  );

}

export default App;