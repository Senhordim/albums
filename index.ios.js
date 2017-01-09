// Index.ios.js - place code in here for IOS!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';

import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

// Create a component
const App = () => (
  <View style={styles.containerStyle}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

const styles = {
  containerStyle: {
    flex: 1

  }
}

// Render ir to the device

AppRegistry.registerComponent('classify', () => App);
