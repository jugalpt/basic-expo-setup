import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPallete from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPalleteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="color-pallete"
        component={ColorPallete}
        options={({ route }) => ({ title: route.params.title })}
      />
    </MainStack.Navigator>
  );
}

export default function App() {
  const linking = {
    config: {
      screens: {
        Main: {
          screens: {
            Home: {
              path: '',
            },
            Details: 'details',
          },
        },
        Modal: {
          initialRouteName: '',
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen
            name="Modal"
            component={ColorPaletteModal}
            // options={{ headerShown: false }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
