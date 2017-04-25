import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import UserListView from '../Containers/Users/Components/UserListview'
import { connect } from 'react-redux'

class RootContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <UserListView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

export default RootContainer
