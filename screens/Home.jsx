import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  RefreshControl,
} from 'react-native';

import ColorList from '../components/ColorList';

export default function Home({ navigation }) {
  const [state, setState] = useState({ status: 'IDLE', data: [], error: null });

  const fetchPalletes = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, status: 'LOADING' }));

      const response = await fetch(
        'https://color-palette-api.kadikraman.vercel.app/palettes',
      );

      if (response?.ok) {
        const data = await response.json();

        if (!data?.length) {
          setState(prev => ({ ...prev, status: 'SUCCESS', data: [] }));
          return;
        }

        setState(prev => ({ ...prev, status: 'SUCCESS', data }));
        return;
      }

      throw new Error('something went wrong!');
    } catch (error) {
      setState(prev => ({
        ...prev,
        status: 'ERROR',
        error: error?.message || 'Something went wrong!',
      }));
    }
  }, []);

  useEffect(() => {
    fetchPalletes();
  }, [fetchPalletes]);

  const handlePress = (title, colors) => {
    navigation.navigate('ColorPalette', {
      colors: colors,
      title: title,
    });
  };

  if (state.status === 'LOADING' || state.status === 'IDLE') {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (state.status === 'ERROR') {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text style={{ color: 'red', alignSelf: 'center' }}>
          :( error occurred while fetching palletes....
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {state.data.length ? (
        <FlatList
          data={state.data}
          keyExtractor={item => item.id}
          refreshing={state.status === 'LOADING'}
          onRefresh={() => fetchPalletes()}
          // refreshControl={
          //   <RefreshControl refreshing={true} onRefresh={() => {}} />
          // }
          renderItem={({ item }) => (
            <ColorList
              title={item.paletteName}
              colors={item.colors}
              handlePress={handlePress}
            />
          )}
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
});
