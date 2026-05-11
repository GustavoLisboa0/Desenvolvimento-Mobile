import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Principal from "./scr/Telas/Principal";
import Carnaval from "./scr/Telas/Carnaval";
import FestaJunina from "./scr/Telas/FestaJunina";
import Halloween from "./scr/Telas/Halloween";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Principal">
          <Stack.Screen
            name="Principal"
            component={Principal}
            options={{
              title: "Bem Vindo(a)",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
              headerTitleAlign: "center"
            }}
          />

          <Stack.Screen
            name="Carnaval"
            component={Carnaval}
            options={{
              title: "Carnaval",
              headerStyle: { backgroundColor: "red" },
              headerTintColor: "black",
              headerTitleAlign: "center"
            }}
          />

          <Stack.Screen
            name="FestaJunina"
            component={FestaJunina}
            options={{
              title: "Festa Junina",
              headerStyle: { backgroundColor: "orange" },
              headerTintColor: "black",
              headerTitleAlign: "center"
            }}
          />

          <Stack.Screen
            name="Halloween"
            component={Halloween}
            options={{
              title: "Halloween",
              headerStyle: { backgroundColor: "purple" },
              headerTintColor: "white",
              headerTitleAlign: "center"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
