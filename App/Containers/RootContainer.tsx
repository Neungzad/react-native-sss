import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'

export interface Props { }
export interface State { }

class RootContainer extends Component<Props, State> {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <NavigationRouter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#eee'
  }
})

export default RootContainer
