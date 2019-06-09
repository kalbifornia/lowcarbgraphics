/**
 * Note: This file is just source code for this proof-of-concept app.
 * If you are just here to sample it, you can ignore this file and use the
 * "Tap to Play" or "Run on your device" commands in the smartphone simulator
 * on the right.
 * 
 * To zoom (as if pinching with two fingers on real phone) in simulator:
 * If on Mac, hold down Option key + Click & Drag
 * If on Windows, hold down Alt key + Click & Drag
 */

import React from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import App1 from './src/App1';
import images from './src/images';
import { name as appName, splash } from './app.json';

AppRegistry.registerComponent(appName, () => App);

export default class App extends React.Component {
  state = {
    isReady: false
  };

  render() {
    return <App1 /> ;
  }
}
