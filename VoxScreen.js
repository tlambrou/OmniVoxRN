import React from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export class VoxScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {vox: this.props.navigation.state.params.vox}
  }


  static navigationOptions = {
    title: 'back',
  };

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
      <Text>This is the {this.state.vox} Vox</Text>
      <Button
      title="Leave this Vox"
      onPress={() =>
        navigate('Home')
      } />

      </View>
    );
  }
}

export default VoxScreen
