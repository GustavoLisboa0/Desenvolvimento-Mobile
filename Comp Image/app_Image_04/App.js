/*
COMPONENTE IMAGE - DESAFIO 4
Bruno Carraro e Gustavo Lisboa
*/

// Importando biblioteca
import React from "react";

// Importando componentes react-native
import {View, Text, Image} from 'react-native';

// Função principal - Manipulação Image
function App() {
  return (
    <View style={{flex: 1,backgroundColor: '#c7c7c7', padding: 30}}>

        <Image
          source={require('./images/foto_1.png')}
          style={{width: 300, height: 200, borderRadius: 10}}
        />

        <Text style={{fontSize: 30, fontFamily: 'Times New Roman', fontWeight: 'bold'}}>
          <br/> Bem-vindo(a) ao aplicativo CarraLis <br/> 
        </Text>

        <View style={{fontSize: 20, fontFamily: 'Calibri', textAlign: 'justify', maxWidth: 500}}>
          <Text>
            O aplicativo CarraLis foi criado para facilitar o acesso a informações sobre  
            os componentes de hardware do computador. Além de ser um aplicativo inovador,
            o CarraLis oferece uma visualização interativa dos componentes com tecnologia
            3D. Facilitando a montagem do seu computador. <br/><br/><br/>
          </Text>

          <View style={{flex: 1, flexDirection: 'row', fontSize: 15, fontFamily: 'Times New Roman', textAlign: 'center'}}>
            <Text style={{
              flex: 1,
              marginRight: 15,
              backgroundColor: '#ffffff',
              border: '2px solid #000',
              borderRadius: 10,
              padding: 10,
              textAlign: 'center'
              }}>Pular
            </Text>

            <Text style={{
              flex: 1,
              marginLeft: 15,
              backgroundColor: '#2ca7ab',
              border: '2px solid #000',
              borderRadius: 10,
              padding: 10,
              textAlign: 'center' 
              }}>Próximo
            </Text>
          </View>

        </View>


    </View>
  );
}

export default App;