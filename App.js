import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import ProfileScreen from './ProfileScreen.js';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
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
