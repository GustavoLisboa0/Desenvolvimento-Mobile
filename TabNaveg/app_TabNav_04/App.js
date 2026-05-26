/*
DESAFIO 04
Drawer Navigation + Tab Navigation + Stack Navigation
Baseado no App_TabNav_01
*/

import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from './src/Telas/Home';
import Portfolio from './src/Telas/Portfolio';
import Contato from './src/Telas/Contato';
import DetalhesProjeto from './src/Telas/DetalhesProjeto';
import Formacao from './src/Telas/Formacao';
import Sobre from './src/Telas/Sobre';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BotaoMenu({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{ marginLeft: 14 }}
      activeOpacity={0.7}
    >
      <MaterialIcons name="menu" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

function PortfolioStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="PortfolioPrincipal"
        component={Portfolio}
        options={{
          title: 'Portfolio',
          headerLeft: () => <BotaoMenu navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="DetalhesProjeto"
        component={DetalhesProjeto}
        options={{ title: 'Projeto Mobile' }}
      />
      <Stack.Screen
        name="Formacao"
        component={Formacao}
        options={{ title: 'Formacao' }}
      />
    </Stack.Navigator>
  );
}

function TabsPrincipais({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeft: () => <BotaoMenu navigation={navigation} />,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingBottom: 4,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={28}
              color={focused ? 'green' : 'gray'}
            />
          ),
          tabBarActiveTintColor: 'green',
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="grid-view"
              size={28}
              color={focused ? 'purple' : 'gray'}
            />
          ),
          tabBarActiveTintColor: 'purple',
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          title: 'Contato',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={28}
              color={focused ? 'blue' : 'gray'}
            />
          ),
          tabBarActiveTintColor: 'blue',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
        <Drawer.Navigator
          initialRouteName="Aplicativo"
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#1a6ef5',
            drawerInactiveTintColor: '#1a1a2e',
            drawerActiveBackgroundColor: '#dce8f5',
            drawerLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        >
          <Drawer.Screen
            name="Aplicativo"
            component={TabsPrincipais}
            options={{
              title: 'Tabs + Stack',
              drawerIcon: ({ focused }) => (
                <MaterialIcons
                  name="apps"
                  size={24}
                  color={focused ? '#1a6ef5' : '#1a1a2e'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Sobre"
            component={Sobre}
            options={{
              title: 'Sobre o Desafio',
              drawerIcon: ({ focused }) => (
                <MaterialIcons
                  name="info"
                  size={24}
                  color={focused ? '#1a6ef5' : '#1a1a2e'}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
