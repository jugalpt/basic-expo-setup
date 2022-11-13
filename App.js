import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import ColorPallete from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// {
//   /* <StatusBar style="auto" /> */
// }

export default function App() {
  const linking = {
    config: {
      screens: {
        Home: {
          path: 'home',
        },
        Details: {
          path: 'details',
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPallete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
