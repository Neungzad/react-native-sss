import React, { Component } from 'react';
import { View, Text } from 'react-native';

interface Props { }
interface State { }

class SplashScreen extends Component<Props, State> {
  render() {
    return (
      <View>
        <Text> LOGO </Text>
      </View>
    );
  }
}

export default SplashScreen;