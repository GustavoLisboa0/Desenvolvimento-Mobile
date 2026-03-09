/*
VARIÁVEIS - DESAFIO 2
Bruno Carraro e Gustavo Lisboa
*/

// Importando biblioteca
import React from "react";

// Importando componentes react-native
import {View, Text, Image} from 'react-native';

// Função principal - Manipulação de variáveis
function App() {

  const name = "CarraLis Tech";
  const description = "Seja bem-vindo(a) ao CarraLis Tech! O seu app de hardware \
  com informações, análises e curiosidades sobre componentes de computador. \
  Explore nosso app com recursos interativos em 3D.";

  const iconUser = require('./images/user.png')
  const iconNotif = require('./images/notification.png')

  const icon1 = require('./images/mobile.png');
  const icon2 = require('./images/research.png');
  const icon3 = require('./images/time.png');

  const techText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <View style={{flex: 1, backgroundColor: '#3f6db5'}}>

      {/* Cabeçalho */}
      <View style={{flexDirection: 'column', height: '25%', width: '100%', justifyContent: 'center'}}>

        {/* Ícones */}
        <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:20, marginRight:20, marginTop:15}}>
          <Image source={iconUser} style={{width:25, height:25}}/>
          <Image source={iconNotif} style={{width:25, height:25}}/>
        </View>

        {/* Nome do app */}
        <Text style={{fontSize:25, fontFamily:"Calibri", textAlign:"center", color:'#ffffff'}}>
          {name}
        </Text>

        {/* Descrição */}
        <Text style={{fontSize:15, fontFamily:"Calibri", textAlign:"justify", marginTop:10, marginLeft:20, marginRight:20, color:'#ffffff'}}>
          {description}
        </Text>

      </View>

      {/* CONTEÚDO */}
      <View style={{flex:1, backgroundColor:'#f5f5f5', borderTopLeftRadius:40, borderTopRightRadius:40, padding:20}}>

        {/* Categories */}
        <Text style={{fontSize:18, fontWeight:'bold'}}>Categories</Text>

        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:15}}>

          <View style={{width:70, height:70, backgroundColor:'#ff8c00', borderRadius:15, justifyContent:'center', alignItems:'center'}}>
            <Image source={icon1} style={{width:35, height:35}}/>
          </View>

          <View style={{width:70, height:70, backgroundColor:'#8a7ccf', borderRadius:15, justifyContent:'center', alignItems:'center'}}>
            <Image source={icon2} style={{width:35, height:35}}/>
          </View>

          <View style={{width:70, height:70, backgroundColor:'#1abc9c', borderRadius:15, justifyContent:'center', alignItems:'center'}}>
            <Image source={icon3} style={{width:35, height:35}}/>
          </View>

        </View>

        {/* Technology */}
        <Text style={{fontSize:18, fontWeight:'bold', marginTop:25}}>Technology</Text>

        {/* Item 1 */}
        <View style={{flexDirection:'row', marginTop:15}}>

          <View style={{width:80, height:60, backgroundColor:'#9fb6d1', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
            <Text>1</Text>
          </View>

          <Text style={{flex:1, marginLeft:10}}>
            {techText}
          </Text>

        </View>

        {/* Barra */}
        <View style={{height:10, backgroundColor:'#4b6fa3', borderRadius:20, marginTop:10}}>
          <View style={{width:'70%', height:10, backgroundColor:'#FFD700', borderRadius:20}}/>
        </View>


        {/* Item 2 */}
        <View style={{flexDirection:'row', marginTop:20}}>

          <View style={{width:80, height:60, backgroundColor:'#9fb6d1', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
            <Text>2</Text>
          </View>

          <Text style={{flex:1, marginLeft:10}}>
            {techText}
          </Text>

        </View>

        {/* Barra */}
        <View style={{height:10, backgroundColor:'#4b6fa3', borderRadius:20, marginTop:10}}>
          <View style={{width:'40%', height:10, backgroundColor:'#FF7F00', borderRadius:20}}/>
        </View>


        {/* Item 3 */}
        <View style={{flexDirection:'row', marginTop:20}}>

          <View style={{width:80, height:60, backgroundColor:'#9fb6d1', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
            <Text>3</Text>
          </View>

          <Text style={{flex:1, marginLeft:10}}>
            {techText}
          </Text>

        </View>

      </View>

    </View>
  );
}

export default App;