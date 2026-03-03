import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'orange', margin: 10 }}>

      <View style={{ alignItems: 'center', backgroundColor: 'skyblue', paddingVertical: 20 }}>
        <Text style={{ fontSize: 30, color: "blue", marginBottom: 20 }}>Componente Image</Text>
        <Image 
          source={require('./imgs/img1.png')} 
          style={{ width: 200, height: 100, borderColor: 'black', borderWidth: 3 }} 
        />
      </View>

      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        backgroundColor: '#5f9ea0', 
        paddingVertical: 20 
      }}>
        <Text style={{ fontSize: 20, color: "white", width: '60%', textAlign: 'justify' }}>
          O react pode estilizar o componente de Varias formas:
        </Text>
        <Image 
          source={require('./imgs/img1.png')} 
          style={{ width: 100, height: 100, borderColor: 'green', borderWidth: 5, borderRadius: 50 }} 
        />
      </View>

      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        backgroundColor: '#dcdcdc', 
        paddingVertical: 20 
      }}>
        <Image 
          source={require('./imgs/img2.png')} 
          style={{ width: 100, height: 100, borderColor: 'white', borderWidth: 2, borderTopLeftRadius: 50 }} 
        />
        <Text style={{ fontSize: 15, color: "gray", width: '70%', textAlign: 'justify' }}>
          - Alterando o formato e a cor da borda{'\n'}
          - Alterando as dimensões e o posicionamento{'\n'}
          - Alterando margens e espaçamentos, etc...
        </Text>
      </View>

    </View>
  );
}

export default App;