import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'

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
    title: 'Welcome',
  };

  componentWillMount() {
    axios.get('http://localhost:3000', {
      params: {
        format: 'json'
      }
    })
    .then((response) => {
      console.log(response.data)
      this.setState({
        greeting: response.data.greeting,
        instruction: response.data.instruction,
        slogan: response.data.slogan,
        placeholder: response.data.placeholder
      }) 
    })
    .catch((err) => {
      console.log(error)
    })
  }

  render() {
    const { navigate } = this.props.navigation
    console.log(this.state)
    return (
      <View style={styles.container}>
      <Text>{this.state.greeting}</Text>
      <Text>{this.state.slogan}</Text>
      <Text>{this.state.instruction}</Text>
      <Button
      title="Go to Vox"
      onPress={() =>
        navigate('Profile', { name: 'Jane' })
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
