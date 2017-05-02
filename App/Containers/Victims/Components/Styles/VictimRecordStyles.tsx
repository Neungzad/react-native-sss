import { StyleSheet } from 'react-native'
import Metrics from '../../../../Themes/Metrics'
import Colors from '../../../../Themes/Colors'
import Fonts from '../../../../Themes/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: Colors.snow,
    paddingVertical: 20
  },
  profile: {
    flex: 0.4,
    width: Metrics.images.veryLarge,
    height:  Metrics.images.veryLarge,
    borderRadius: Metrics.images.veryLarge
  },
  content: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topSide: {
    flexDirection: 'column'
  },
  bottomSide: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  title: {
    ...Fonts.style.h3,
    fontSize: 20
  },
  subTitle: {
    ...Fonts.style.description,
    fontSize: 12,
    color: '#bbb'
  },
  reward: {
    ...Fonts.style.h5,
    marginLeft: 10
  }
})