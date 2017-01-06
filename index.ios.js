// Index.ios.js - place code in here for IOS!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry} from 'react-native';

import Header from './src/components/header'

// Create a component
const App = () => (
    <Header headerText={'Classify'} />
);



// Render ir to the device

AppRegistry.registerComponent('classify', () => App);
