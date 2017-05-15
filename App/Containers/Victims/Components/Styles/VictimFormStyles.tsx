import { StyleSheet } from 'react-native'
import Colors from '../../../../Themes/Colors'
import Metrics from '../../../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Colors.transparent,
    marginTop: Metrics.navBarHeight,
    padding: Metrics.doubleBaseMargin
  }
})