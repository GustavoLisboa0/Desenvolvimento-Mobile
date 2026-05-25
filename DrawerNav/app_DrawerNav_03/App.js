/* DRAWER NAVIGATION - DESAFIO 3

ALUNOS: BRUNO CARRARO E GUSTAVO LISBOA */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Home from "./src/Telas/Home";
import LinguagemC from "./src/Telas/LinguagemC";
import LinguagemPython from "./src/Telas/LinguagemPython";
import LinguagemJava from "./src/Telas/LinguagemJava";

// ─── Tab Navigator (as 3 linguagens) ───────────────────────────────────────
const Tab = createBottomTabNavigator();

function LinguagensTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0b1a0e",
          borderTopWidth: 1,
          borderTopColor: "#1a3d20",
          height: 62,
          paddingBottom: 6,
        },
        tabBarInactiveTintColor: "#4a7a52",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          letterSpacing: 0.5,
        },
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="C"
        component={LinguagemC}
        options={{
          tabBarLabel: "Linguagem C",
          tabBarActiveTintColor: "#5dde76",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="code"
              size={26}
              color={focused ? "#5dde76" : "#4a7a52"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Python"
        component={LinguagemPython}
        options={{
          tabBarLabel: "Python",
          tabBarActiveTintColor: "#a8ff78",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="terminal"
              size={26}
              color={focused ? "#a8ff78" : "#4a7a52"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Java"
        component={LinguagemJava}
        options={{
          tabBarLabel: "Java",
          tabBarActiveTintColor: "#39d353",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="laptop"
              size={26}
              color={focused ? "#39d353" : "#4a7a52"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// ─── Drawer Navigator (raiz do app) ────────────────────────────────────────
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#071009" },
          headerTintColor: "#d4f5dc",
          headerTitleStyle: { fontWeight: "bold", letterSpacing: 1 },
          drawerStyle: { backgroundColor: "#071009", width: 250 },
          drawerLabelStyle: {
            color: "#d4f5dc",
            fontSize: 15,
            fontWeight: "700",
            letterSpacing: 0.5,
          },
          drawerActiveTintColor: "#5dde76",
          drawerInactiveTintColor: "#4a7a52",
          drawerActiveBackgroundColor: "#0f2a14",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "🏠  Início",
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="home"
                size={22}
                color={focused ? "#5dde76" : "#4a7a52"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Linguagens"
          component={LinguagensTab}
          options={{
            title: "💻  Linguagens",
            headerTitle: "Linguagens de Programação",
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="code"
                size={22}
                color={focused ? "#5dde76" : "#4a7a52"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}