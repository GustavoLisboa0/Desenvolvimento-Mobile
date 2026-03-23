import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

function App() {
  const dadosUsuarios = [
    { nome: 'Bruno Carraro', cargo: 'Diretor', idade: 21, img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' },
    { nome: 'Gustavo Lisboa', cargo: 'Diretor', idade: 23, img: 'https://cdn-icons-png.flaticon.com/512/4140/4140061.png' },
    { nome: 'Eduardo Augusto', cargo: 'Desenvolvedor Web', idade: 18, img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
    { nome: 'Luiza Fernandes', cargo: 'Desenvolvedor Web', idade: 28, img: 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png' },
    { nome: 'Nicole Camargo', cargo: 'Analista de Dados', idade: 19, img: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png' },
    { nome: 'Luiz Alberto', cargo: 'Analista de Dados', idade: 25, img: 'https://cdn-icons-png.flaticon.com/512/4140/4140049.png' },
    { nome: 'Bernardo Silva', cargo: 'Analista de Redes', idade: 22, img: 'https://cdn-icons-png.flaticon.com/512/4140/4140057.png' }
  ];

  // Ícones para a aba de navegação 
  const iconesTab = [
    'https://cdn-icons-png.flaticon.com/512/599/599506.png', 
    'https://cdn-icons-png.flaticon.com/512/1055/1055613.png', 
    'https://cdn-icons-png.flaticon.com/512/1077/1077063.png', 
    'https://cdn-icons-png.flaticon.com/512/2150/2150150.png', 
    'https://cdn-icons-png.flaticon.com/512/151/151917.png'    
  ];

  let listaElementos = [];
  let i = 0;
  while (i < dadosUsuarios.length) {
    const user = dadosUsuarios[i];
    listaElementos.push(
      <TouchableOpacity key={i} style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 15, 
        borderBottomWidth: 1, 
        borderBottomColor: '#eee',
        backgroundColor: '#fff' 
      }}>
        <Image source={{ uri: user.img }} style={{ width: 50, height: 50, borderRadius: 25 }} />
        
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{user.nome}</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>{user.cargo}</Text>
        </View>

        <Text style={{ fontSize: 20, color: '#ccc' }}>{'>'}</Text> 
      </TouchableOpacity>
    );
    i++;
  }

  let tabButtons = [];
  let j = 0;
  while (j < iconesTab.length) {
    tabButtons.push(
      <Image key={j} source={{ uri: iconesTab[j] }} style={{ width: 30, height: 30, opacity: 0.6 }} />
    );
    j++;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      {/* Cabeçalho */}
      <View style={{ height: 80, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd', paddingTop: 20 }}>
         <Text style={{ fontWeight: 'bold', fontSize: 18 }}>REACT NATIVE ELEMENTS</Text>
      </View>

      {/* Corpo */}
      <ScrollView style={{ flex: 1 }}>
        {listaElementos}
      </ScrollView>

      {/* footer */}
      <View style={{ 
        height: 70, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd'
      }}>
        {tabButtons}
      </View>
    </View>
  );
}

export default App;