import React from 'react';

import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import ColorTile from '../components/ColorTile';

export default function ColorPallete({ route }) {
  const colors = route.params.colors;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <View>
          <FlatList
            data={colors}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => (
              <ColorTile background={item.hexCode} text={item.colorName} />
            )}
          />
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
  },
});
