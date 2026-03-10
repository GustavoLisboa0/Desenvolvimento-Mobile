import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  let img1 = require("./imgs/img.jpeg");
  let img2 = 'https://i.pinimg.com/236x/3a/53/5b/3a535b537cc2067bcc9ad041c12f852a.jpg';
  let corFundo1 = 'rgba(0, 0, 0, 0.2)';
  let corLetra1 = 'white';
  let tamanhoLetra1 = 40;

  let OPCAO = 2;

  if (OPCAO == 1) {
    return (
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <Image source={img1}
          style={{ width: '100%', height: '100%' }} />
        <View style={{
          backgroundColor: corFundo1, left: 100, top: 100,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>OPÇÃO 1</Text>
        </View>
        <View style={{
          backgroundColor: corFundo1, left: 100, top: 300,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>OPÇÃO 2</Text>
        </View>
        <View style={{
          backgroundColor: corFundo1, left: 130, top: 500,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>SAIR</Text>
        </View>
      </View>
    );
  }
  else
    return (
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <Image source={{ uri: img2 }}
          style={{ width: '100%', height: '100%' }} />
        <View style={{
          backgroundColor: 'rgba(255, 0, 0, 0.2)', left: 100, top: 100,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>OPÇÃO 1</Text>
        </View>
        <View style={{
          backgroundColor: 'rgba(0, 255, 0, 0.2)', left: 100, top: 300,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>OPÇÃO 2</Text>
        </View>
        <View style={{
          backgroundColor: 'rgba(0, 0, 255, 0.2)', left: 120, top: 550,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>SAIR</Text>
        </View>
      </View>
    );
}

export default App;