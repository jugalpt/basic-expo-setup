import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import ColorList from '../components/ColorList';

import { useData } from '../context/StateContext';

export default function Home({ navigation, route }) {
  const { status, data, fetchPalletes } = useData();
  const routeState = route.params;

  console.log({ routeState });

  const handlePress = (title, colors) => {
    navigation.navigate('color-pallete', {
      colors: colors,
      title: title,
      other: JSON.stringify(colors),
    });
  };

  if (status === 'LOADING' || status === 'IDLE') {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (status === 'ERROR') {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text style={{ color: 'red', alignSelf: 'center' }}>
          :( error occurred while fetching palletes....
        </Text>
      </View>
    );
  }

  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          refreshing={status === 'LOADING'}
          onRefresh={() => fetchPalletes()}
          renderItem={({ item }) => (
            <ColorList
              title={item.paletteName}
              colors={item.colors}
              handlePress={handlePress}
            />
          )}
          ListHeaderComponent={
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {})}>
              <Text style={styles.addText}>Add Color Scheme</Text>
            </TouchableOpacity>
          }
        />
      ) : (
        <View style={[styles.container, styles.horizontal]}>
          <Text style={{ color: 'red', alignSelf: 'center' }}>
            :( No Data Available...
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  addText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 16,
    backgroundColor: 'blue',
    margin: 16,
  },
});
