/*
LAÇOS DE REPETIÇÃO - DESAFIO 3
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

// Função principal - Laços de repetição
function App() {
  let elemento = null;
  let i = 0;
  const Autor = "CarraLis";
  const Data = "03/2026";
  let ArrayNomes = ['Bruno Carraro', 'Gustavo Lisboa', 'Eduardo Augusto', 'Luiza Fernandes', 'Nicole Camargo', 'Luiz Alberto', 'Bernardo Silva' ];
  let ArrayCargo = ['Diretor', 'Diretor', 'Desenvolvedor Web', 'Desenvolvedor Web', 'Analista de Dados', 'Analista de Dados', 'Analista de Redes'];
  let ArrayIdades = [21, 23, 18, 28, 19, 25, 22];
  let ArrayImage = [
  'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
  'https://cdn-icons-png.flaticon.com/512/4140/4140061.png',
  'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
  'https://cdn-icons-png.flaticon.com/512/4140/4140051.png',
  'https://cdn-icons-png.flaticon.com/512/4140/4140047.png',
  'https://cdn-icons-png.flaticon.com/512/4140/4140049.png',
  'https://cdn-icons-png.flaticon.com/512/4140/4140057.png'
  ];
  
  while (i < ArrayNomes.length) {
    elemento = (
      <>
        {elemento}
        <View style={{ marginTop: 5, marginBottom: 5, padding: 10, height: 100, width: '100%', backgroundColor: '#4eafd2', flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: ArrayImage[i] }} 
            style={{ width: 65, height: 65, borderRadius: 8, borderWidth: 2, borderColor: '#000000', marginRight: 10, backgroundColor: '#ffffff' }} 
          />

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Nome: <Text style={{ fontSize: 16, fontWeight: 'normal' }}>{ArrayNomes[i]}</Text>
            </Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Cargo: <Text style={{ fontSize: 16, fontWeight: 'normal' }}>{ArrayCargo[i]}</Text>
            </Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Idade: <Text style={{ fontSize: 16, fontWeight: 'normal' }}>{ArrayIdades[i]}</Text>
            </Text>
          </View>

        </View>
      </>
    )
    i++;
  }

  return (
    <View style={{ backgroundColor: '#f2f2f2', flex: 1, padding: 10 }}>

      <View id='cabecalho' style={{
        borderTopRightRadius: 25, borderTopLeftRadius: 25,
        backgroundColor: '#234c5b', flex: 2,
        justifyContent: 'center', alignItems: 'center'
      }}>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff', fontFamily: "Arial Rounded MT Bold" }}>LAÇOS DE REPETIÇÃO</Text>

        <Image source={require('./images/icon_cabecalho.png')}
          style={{ width: 220, height: 100, borderRadius: 20, marginTop: 5, marginBottom: 5 }}
        />

        <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: 'bold', fontFamily: "Arial Rounded MT Bold", marginBottom: 5 }}>APP MOBILE</Text>
      
      </View>

      <ScrollView id='corpo' style={{
        backgroundColor: '#f2f2f2', flex: 5,
      }}>
        {elemento}
      </ScrollView>

      <View id='rodape' style={{
        backgroundColor: '#234c5b', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
      }}>
        <Text style={{ color: "#ffffff", fontSize: 20, fontFamily: "Arial Rounded MT Bold" }}>{Autor}</Text>
        <Text style={{ color: "#ffffff", fontSize: 20, fontFamily: "Arial Rounded MT Bold" }}>{Data}</Text>
      </View>
    </View>
  );
}

export default App;