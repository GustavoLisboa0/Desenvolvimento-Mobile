import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Principal from "./scr/Telas/Principal";
import Planetas from "./scr/Telas/Planetas";
import Missoes from "./scr/Telas/Missoes";
import Observacao from "./scr/Telas/Observacao";

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
              title: "Explorador Espacial",
              headerStyle: { backgroundColor: "#132238" },
              headerTintColor: "white",
              headerTitleAlign: "center"
            }}
          />
          <Stack.Screen
            name="Planetas"
            component={Planetas}
            options={{
              title: "Planetas",
              headerStyle: { backgroundColor: "#006d77" },
              headerTintColor: "white",
              headerTitleAlign: "center"
            }}
          />
          <Stack.Screen
            name="Missoes"
            component={Missoes}
            options={{
              title: "Missões",
              headerStyle: { backgroundColor: "#8a4f00" },
              headerTintColor: "white",
              headerTitleAlign: "center"
            }}
          />
          <Stack.Screen
            name="Observacao"
            component={Observacao}
            options={{
              title: "Observação",
              headerStyle: { backgroundColor: "#4a3769" },
              headerTintColor: "white",
              headerTitleAlign: "center"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
