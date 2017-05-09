import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Scene, Router, ActionConst} from 'react-native-router-flux'
import { VictimListView } from '../Containers/Victims'
import { Login, SplashScreen, logout } from '../Containers/Auth'

interface Props {
  logout: () => void
}
interface State {}

class NavigationRouter extends Component<Props, State> {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="splashScreen" component={SplashScreen} hideNavBar={true} />
        <Scene key="login" component={Login} title="Login" hideNavBar={true} />
        <Scene type={ActionConst.RESET} key="victimListView" component={VictimListView} title="Victim List" hideNavBar={false}
               onLeft={this.props.logout} leftTitle="Logout"
        />
      </Scene>
    </Router>
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(undefined, mapDispatchToProps)(NavigationRouter)