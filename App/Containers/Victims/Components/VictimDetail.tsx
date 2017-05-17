import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/VictimDetailStyles'
import { AppState, Victim } from '../../../types'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

interface Props {
  id: number,
  victim: Victim,
  userId: number
}
interface State { }

class VictimDetail extends Component<Props, State> {
  componentDidMount() {
    let option: any = {
      title: this.props.victim.name
    }

    // owner can edit
    if (this.props.userId === this.props.victim.user_id) {
      option.rightTitle = 'Edit'
      option.onRight = () => {
        Actions.editVictim({
          id: this.props.id
        })
      }
    }

    console.log(this.props)
    Actions.refresh(option)
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
    userId: state.auth.userId,
    victim: state.victims.byId[ownProps.id]
  }
}

export default connect(mapStateToProps)(VictimDetail)