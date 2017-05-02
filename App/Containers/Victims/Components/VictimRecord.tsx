import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Victim } from '../../../types'

export interface Props {
  data: Victim
}

export interface State { }

class VictimRecord extends Component<Props, State> {
  render() {
    return (
      <View>
        <Text>{this.props.data.name}</Text>
      </View>
    )
  }
}

export default VictimRecord