import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import VictimListView from '../Containers/Victims/Components/VictimListView'

export interface Props { }
export interface State { }

class RootContainer extends Component<Props, State> {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <VictimListView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default RootContainer
