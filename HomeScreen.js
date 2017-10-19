import React from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: "",
      instruction: "",
      slogan: "",
      placeholder: ""
    }
  }
  static navigationOptions = {
    title: 'Back',
  };

  componentWillMount() {
    axios.get('http://localhost:3000', {
      params: {
        format: 'json'
      }
    })
    .then((response) => {
      this.setState(response.data)
    })
    .catch((err) => {
      console.log(error)
    })
  }

  render() {
    const { navigate } = this.props.navigation
    const vox = { vox: this.state.text }
    return (
      <View style={styles.container}>
      <Text>{this.state.greeting}</Text>
      <Text>{this.state.slogan}</Text>
      <Text>{this.state.instruction}</Text>
      <TextInput
        style={{height: 40, width: '90%', borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
      title="Go to Vox"
      onPress={() =>
        navigate('Vox', vox)
      }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2E8E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
