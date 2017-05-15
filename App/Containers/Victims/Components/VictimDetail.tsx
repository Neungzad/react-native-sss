import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/VictimDetailStyles'
import { AppState, Victim } from '../../../types'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

interface Props {
  id: number,
  victim: Victim
}
interface State { }

class VictimDetail extends Component<Props, State> {
  componentDidMount() {
    Actions.refresh({
      title: this.props.victim.name,
      rightTitle: 'Edit',
      onRight: () => {
        alert(this.props.id)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> id {this.props.id} </Text>
        <Text> name {this.props.victim.name} </Text>
        <Text> nickname {this.props.victim.nickname} </Text>
        <Text> reward {this.props.victim.reward} </Text>
        <Text> imgPath {this.props.victim.imgPath} </Text>
      </View>
    )
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => {
  return {
    victim: state.victims.byId[ownProps.id]
  }
}

export default connect(mapStateToProps)(VictimDetail)