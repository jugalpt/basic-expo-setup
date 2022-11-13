import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}
      >
        <Text style={{ padding: 16 }}>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
}
