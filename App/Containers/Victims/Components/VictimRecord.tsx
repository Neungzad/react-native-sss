import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Victim } from '../../../types'
import styles from './Styles/VictimRecordStyles'
import appConfig from '../../../Config/appConfig'
import { Actions } from 'react-native-router-flux'

export interface Props {
  data: Victim
}

export interface State { }

class VictimRecord extends Component<Props, State> {

  render() {
    return (
      <TouchableHighlight onPress={() => Actions.showVictim({id: this.props.data.id})}
        underlayColor="#eee" >
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.profile}
            source={{uri: `${appConfig.IMG_URL}/${this.props.data.imgPath}` }}
          />
          <View style={styles.content}>
            <View style={styles.topSide}>
              <Text style={styles.title} >{this.props.data.name}</Text>
              <Text style={styles.subTitle}>{this.props.data.nickname}</Text>
            </View>
            <View style={styles.bottomSide}>
              <Text style={styles.subTitle}>฿</Text>
              <Text style={styles.reward}>{this.props.data.reward}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default VictimRecord