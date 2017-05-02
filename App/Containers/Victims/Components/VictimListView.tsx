import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, ListView, ListViewDataSource, ActivityIndicator } from 'react-native'
import { loadVictims } from '../actions'
import { AppState, Victim } from '../../../types'
import styles from './Styles/VictimListViewStyles'
import VictimRecord from './VictimRecord'

export interface Props {
  isFetching: boolean
  loadVictims: () => void
  victims: Array<Victim>
}

export interface State {
  dataSource: ListViewDataSource | undefined
}

class VictimListView extends Component<Props, State> {
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

  constructor() {
    super()
    this.state = { dataSource: undefined }
  }

  componentDidMount() {
    this.props.loadVictims()
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.victims)
    })
  }

  renderListView(dataSource: ListViewDataSource | undefined) {
    if (!dataSource)
      return <Text>No Data</Text>

    return <ListView
      dataSource={dataSource}
      renderRow={(rowData) => <VictimRecord data={rowData} />}
    />
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.isFetching ? (
          <ActivityIndicator />
        ) : (
          this.renderListView(this.state.dataSource)
        )}
      </View>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    isFetching: state.victims.isFetching,
    victims: Object.keys(state.victims.byId).map(key => state.victims.byId[key])
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadVictims: () => dispatch(loadVictims())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VictimListView)