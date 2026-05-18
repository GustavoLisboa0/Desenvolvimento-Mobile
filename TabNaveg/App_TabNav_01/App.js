/* 
TAB NAVEGATION - DESAFIOS 1 E 2
BRUNO CARRARO E GUSTAVO LISBOA
*/

import { StatusBar } from 'react-native';
import Home from './src/Telas/Home';
import Portfolio from './src/Telas/Portfolio';
import Contato from './src/Telas/Contato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="darkblue" />
      <Tab.Navigator
        screenOptions={{
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
            headerShown: false,
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
          component={Portfolio}
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
            headerShown: false,
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
    </NavigationContainer>
  );
}

export default App;