/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Map</Text>
        <MapView
          style={styles.map}
          initialRegion={{
           latitude: 48.78825,
          longitude: -72.4324,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'blue'
  },
  map: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
