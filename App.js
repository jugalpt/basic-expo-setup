import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import ColorTile from './components/ColorTile';

// {
//   /* <StatusBar style="auto" /> */
// }

const data = [
  {
    color: 'Cyan',
    background: '#268bd2',
  },
  {
    color: 'Blue',
    background: '#268bd2',
  },
  {
    color: 'Magenta',
    background: '#d33682',
  },
  {
    color: 'Orange',
    background: '#cb4b16',
  },
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container]}>
        {/* <Text style={[styles.paddingOne, styles.redColor]}>Hello, World</Text> */}
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Here are some boxes with different colors
          </Text>
          {data.map(({ color, background }, index) => (
            <ColorTile key={index} background={background} text={color} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingOne: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  redColor: {
    color: 'red',
  },
  container: {
    flex: 1,
    padding: 24,
    ...Platform.select({
      android: {
        paddingVertical: 50,
      },
    }),
  },
});
