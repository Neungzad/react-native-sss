import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, ListView, ListViewDataSource } from 'react-native'
import { fetchAssaRequest } from '../actions'
import { GlobalState, AssaObject } from '../../../types'
import styles from './Styles/AssaListViewStyles'
import VictimRecord from './VictimRecord'

export interface Props {
  fetching: boolean
  fetchAssaList: () => void
  victims: Array<AssaObject>
}

export interface State {
  dataSource: ListViewDataSource | undefined
}

class AssaListview extends Component<Props, State> {
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

  constructor() {
    super()
    this.state = { dataSource: undefined }
  }

  componentDidMount() {
    this.props.fetchAssaList()
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
        {this.props.fetching ? (
          <Text>Loading...</Text>
        ) : (
          this.renderListView(this.state.dataSource)
        )}
      </View>
    )
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    fetching: state.assasins.fetching,
    victims: Object.keys(state.assasins.victims).map(key => state.assasins.victims[key])
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAssaList: () => dispatch(fetchAssaRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssaListview)