/*
COMPONENTE VIEW - DESAFIO 1
Bruno Carraro e Gustavo Lisboa
*/

// Importando biblioteca
import React from "react";

// Importando componentes react-native
import {View, Text} from 'react-native';

// Função principal - Manipulação Text
function App() {
  return (
    <View style={{flex: 1,backgroundColor: '#939393', padding: 30}}>

      <Text style={{color: '#fff', backgroundColor: "#ff6600", fontSize: 30, textAlign: 'center', marginBottom: 30}}>
        Poema
      </Text>
      
      <Text style={{fontSize: 20}}>
        <text> O sol se põe... {'\n'} no horizonte, <br/> </text>
        <text style={{fontFamily: 'Times New Roman'}}>As estrelas começam a brilhar, <br/> </text>
        <text style={{fontSize: 30, fontWeight: 'bold'}}>A noite se torna um manto escuro, <br/> </text>
        <text style={{fontSize: 20, fontFamily: 'Arial', fontStyle: 'italic'}}>E a lua começa a dançar. <br/><br/> </text>
        
        <text>O vento sussurra segredos, <br/> </text>
        <text>As árvores balançam suavemente, <br/> </text>
        <text>A natureza se acalma, <br/> </text>
        <text>E o mundo se torna um lugar diferente. <br/><br/><br/> </text>
      </Text>

      <Text style={{color: '#fff', backgroundColor: "#ff6600", fontSize: 30, textAlign: 'center', marginBottom: 30}}>
        Bruno Carraro e Gustavo Lisboa {'\n'} (00 01234-5678)
      </Text>

    </View>
  );
}

export default App;