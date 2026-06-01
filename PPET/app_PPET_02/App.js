/* DESAFIO 02 - PASSANDO PARAMETROS PARA COMPONENTES */
/* BRUNO CARRARO E GUSTAVO LISBOA */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin    from './src/Telas/TelaLogin';
import TelaCadastro from './src/Telas/TelaCadastro';
import TelaPerfil   from './src/Telas/TelaPerfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaLogin"    component={TelaLogin}    />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaPerfil"   component={TelaPerfil}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}