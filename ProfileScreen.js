import React from 'react'

export class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Home', { name: 'Jane' })
        }
      />
    );
  }
}

export default ProfileScreen
