import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';

import ColorTile from '../components/ColorTile';
import ColorList from '../components/ColorList';

const data = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

export default function ColorPallete({ route }) {
  const colors = route.params.colors;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <View>
          {/* <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{title}</Text> */}
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
