/*
GRUPOS DE ESTILO
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Estilos do app
const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: 'powderblue',
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10
  },

  cabecalho: {
    backgroundColor: 'white',
    flex: '15%',
    paddingTop: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  corpo: {
    backgroundColor: 'white',
    flex: '75%'
  },

  itemCorpo: {
    backgroundColor: 'blue',
    marginTop: 15,
    borderRadius: 20,
    marginHorizontal: 10,
    height: 70,
    borderLeftWidth: 3,
    borderColor: 'red',
    justifyContent: 'center',
    paddingLeft: 10
  },

  rodape: {
    backgroundColor: 'white',
    height: '10%',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  botaoMenu: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  textoMenu: {
    fontSize: 12,
    color: 'black',
    marginTop: 2
  }
});

// Função Principal
function App() {
  let cabImg1 = require('./img/cabUser.png');
  let cabImg2 = require('./img/cabApps.png');
  let rodImg1 = require('./img/rodHome.png');
  let rodImg2 = require('./img/rodMidia.png');
  let rodImg3 = require('./img/rodLocal.png');
  let rodImg4 = require('./img/rodCalendar.png');
  let rodImg5 = require('./img/rodMenu.png');

  return (
    
    <View id="View01" style={estilos.fundo}>

      {/* CABEÇALHO */}
      <View id="View02" style={estilos.cabecalho}>

        <View id="View05" style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center'
          }}>

          <Image source={cabImg1}
            style={{width: 50, height: 50}}
          />

          <Text style={{ paddingLeft: 15 }} >Nome Sobrenome</Text>
        </View>

        <Image source={cabImg2}
          style={{width: 18, height: 24, resizeMode: "contain"}}
        />

      </View>

      {/* CORPO COM SCROLL */}
      <ScrollView id="View03" style={estilos.corpo}>

        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>

        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>

        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>

        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>

        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>

        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>

        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>

      </ScrollView>

      {/* RODAPÉ */}
      <View id="View04" style={estilos.rodape}>

        <View style={estilos.botaoMenu}>
          <Image source={rodImg2} style={{width: 30, height: 30, resizeMode: "contain"}} />
          <Text style={estilos.textoMenu}>Mídia</Text>
        </View>

        <View style={estilos.botaoMenu}>
          <Image source={rodImg3} style={{width: 30, height: 30, resizeMode: "contain"}} />
          <Text style={estilos.textoMenu}>Local</Text>
        </View>

        <View style={estilos.botaoMenu}>
          <Image source={rodImg1} style={{width: 40, height: 40, resizeMode: "contain"}} />
          <Text style={estilos.textoMenu}>Home</Text>
        </View>

        <View style={estilos.botaoMenu}>
          <Image source={rodImg4} style={{width: 30, height: 30, resizeMode: "contain"}} />
          <Text style={estilos.textoMenu}>Agenda</Text>
        </View>

        <View style={estilos.botaoMenu}>
          <Image source={rodImg5} style={{width: 30, height: 30, resizeMode: "contain"}} />
          <Text style={estilos.textoMenu}>Menu</Text>
        </View>

      </View>
      
    </View>
  );
}

export default App;