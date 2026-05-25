/* DRAWER NAVIGATION - DESAFIO 2

ALUNOS: BRUNO CARRARO E GUSTAVO LISBOA */

import React from "react";
import Home from "./src/Telas/Home";
import Montadoras from "./src/Telas/Montadoras";
import CarrosFamosos from "./src/Telas/CarrosFamosos";
import Motores from "./src/Telas/Motores";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#0a0f1e" },
          headerTintColor: "#e8f4fd",
          headerTitleStyle: { fontWeight: "bold", letterSpacing: 1 },
          drawerStyle: { backgroundColor: "#0d1526", width: 240 },
          drawerLabelStyle: { color: "#e8f4fd", fontSize: 15, fontWeight: "600" },
          drawerActiveTintColor: "#4da6ff",
          drawerInactiveTintColor: "#8aaccc",
          drawerActiveBackgroundColor: "#1a2a45",
        }}
      >
        <Drawer.Screen name="Home"         component={Home}         options={{ title: "🏠  Início" }} />
        <Drawer.Screen name="Montadoras"   component={Montadoras}   options={{ title: "🏭  Montadoras" }} />
        <Drawer.Screen name="CarrosFamosos" component={CarrosFamosos} options={{ title: "🚗  Carros Famosos" }} />
        <Drawer.Screen name="Motores"      component={Motores}      options={{ title: "⚙️  Motores" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;