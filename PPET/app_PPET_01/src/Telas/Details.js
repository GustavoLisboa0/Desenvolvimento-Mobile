import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function Details() {
  const nav = useNavigation();
  const rota = useRoute();
  const [nome_digitado, setNome_Digitado] = useState("");

  function voltar() {
    rota.params.retornarNome(nome_digitado);
    nav.goBack();
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: "skyblue",
      paddingVertical: 170,
      paddingHorizontal: 30
    }}>

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
        PASSAGEM DE PARÂMETRO ENTRE TELAS
      </Text>

      <Text style={{ fontSize: 35, fontWeight: 'bold' }}>TELA DETAILS</Text>

      <Text style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}>
        Digite seu nome e clique no botão para voltar para a tela Home e passar o nome digitado para ela.
      </Text>

      <TextInput
        placeholder='Digite seu Nome'
        style={{ borderWidth: 1, height: 40, marginBottom: 10, backgroundColor: 'white', width: '100%' }}
        onChangeText={setNome_Digitado}
      />

      <Button
        title='Voltar'
        color='darkred'
        onPress={voltar}
      />

    </View>
  );
}

export default Details;