/*
COMPONENTE IMAGE - DESAFIO 5
Bruno Carraro e Gustavo Lisboa
*/

// Importando biblioteca
import React from "react";

// Importando componentes react-native
import { View, Text, Image } from 'react-native';

// Função principal - Manipulação Image
function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#c7c7c7' }}>
      
      <View style={{
        backgroundColor: '#0c7b7f',
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Text style={{ color: '#ffffff', fontSize: 22, fontWeight: 'bold' }}>
          CarraLis <Text style={{ fontSize: 10, fontWeight: 'normal' }}>COMPONENTES</Text>
        </Text>
      </View>

      <View style={{ backgroundColor: '#2ca7ab', height: 40 }} />

      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
      }}>
        
        <Image
          source={require('./images/foto_1.png')}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            marginBottom: 40
          }}
        />

        <Text style={{
          fontSize: 24,
          color: '#333',
          textAlign: 'center',
          fontWeight: '500',
          lineHeight: 35
        }}>
          Seja independente, com nosso aplicativo, monte sozinho seu PC!
        </Text>

      </View>

      <View style={{ backgroundColor: '#0c7b7f', height: 50 }} />

    </View>
  );
}

export default App;