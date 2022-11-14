import React from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function ColorSquare({ color }) {
  return <View style={[styles.box, { backgroundColor: color }]} />;
}

export default function ColorList({ title, colors, handlePress }) {
  const slicedColors = colors.slice(0, 5);
  return (
    <TouchableOpacity onPress={() => handlePress(title, colors)}>
      <View style={{ gap: 5, padding: 10 }}>
        <Text style={styles.titleText}>{title}</Text>
        <FlatList
          data={slicedColors}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => {
            return <ColorSquare color={item.hexCode} />;
          }}
          horizontal={true}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 14,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.3,
    // shadowRadius: 1,
    // elevation: 10,
  },
});
