import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export interface Props {}
export interface State {}

class AssaListview extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SSS
        </Text>
        <Image
          resizeMode="contain"
          style={{width: 300, height: 200}}
          source={{uri: 'http://gif-finder.com/wp-content/uploads/2015/08/Leonardo-DiCaprio-OMG.gif'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default AssaListview;