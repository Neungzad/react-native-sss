import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'
import { VictimListView } from '../Containers/Victims'
import { Login } from '../Containers/Auth'

interface Props {}
interface State {}

class NavigationRouter extends Component<Props, State> {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar={true}  />
        <Scene key="victimListView" component={VictimListView} title="Victim List" hideNavBar={false} />
      </Scene>
    </Router>
  }
}

export default NavigationRouter