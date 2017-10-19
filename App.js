import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import VoxScreen from './VoxScreen.js';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Vox: { screen: VoxScreen },
});

export default class App extends React.Component {

  var

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}
