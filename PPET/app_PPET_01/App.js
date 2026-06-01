/* DESAFIO 1 - PASSAGEM DE PARAMETROS ENTRE TELAS */
/* BRUNO CARRARO E GUSTAVO LISBOA */

import React from 'react';
import Home from './src/Telas/Home';
import Details from './src/Telas/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Passagem de Parâmetros entre Telas",
            headerStyle: { backgroundColor: 'black' },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: "Passagem de Parâmetros entre Telas",
            headerStyle: { backgroundColor: 'black' },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;