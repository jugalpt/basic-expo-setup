import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ColorTile({ background, text }) {
  return (
    <View style={[styles.colorTileContainer, { backgroundColor: background }]}>
      <Text style={styles.colorTileText}>{`${text} ${background}`}</Text>
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
  colorTileText: {
    color: 'white',
    fontWeight: 'bold',
  },
})