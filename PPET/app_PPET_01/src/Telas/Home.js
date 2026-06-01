import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const nav = useNavigation();
  const [nome, setNome] = useState('');

  function receberNome(nomeDigitado) {
    setNome(nomeDigitado);
  }

  function navegar() {
    nav.navigate("Details",
      {
        retornarNome: receberNome
      }
    );
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: "lightgray",
      paddingVertical: 170
    }}>

      <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
        PASSAGEM DE PARÂMETRO ENTRE TELAS
      </Text>

      <Text style={{ fontSize: 35, fontWeight: 'bold' }}>TELA HOME</Text>

      {
        nome === ''
          ? <Text>Nenhum parâmetro informado!</Text>
          : <Text>{nome}</Text>
      }

      <Button
        title='Ir para a Próxima Tela'
        color='#841584'
        onPress={navegar}
      />

    </View>
  );
}

export default Home;