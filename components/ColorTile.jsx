import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorTile({ background, text }) {
  // const color =
  //   text === 'Base2' || text === 'Base3'
  //     ? styles.colorBlack
  //     : styles.colorWhite;

  const color = {
    color:
      parseInt(background.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  console.log({ color });
  return (
    <View style={[styles.colorTileContainer, { backgroundColor: background }]}>
      <Text style={[styles.bold, { ...color }]}>{`${text} ${background}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  colorTileContainer: {
    // flex: 1,
    padding: 16,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  colorWhite: {
    color: '#fff',
  },
  colorBlack: {
    color: '#000',
  },
});
