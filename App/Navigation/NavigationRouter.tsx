import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Router, ActionConst, Actions, Modal } from 'react-native-router-flux'
import { VictimListView, VictimForm, VictimDetail } from '../Containers/Victims'
import { Login, SplashScreen, logout } from '../Containers/Auth'
import StatusModal from '../Components/StatusModal'

interface Props {
  logout: () => void
}
interface State {}

class NavigationRouter extends Component<Props, State> {
  render() {
    return <Router>
      <Scene key="modal" component={Modal}>
        <Scene key="root">
          <Scene key="splashScreen" component={SplashScreen} hideNavBar={true} />
          <Scene key="login" component={Login} title="Login" hideNavBar={true} />

          <Scene type={ActionConst.RESET} key="victimListView" component={VictimListView} title="Victim List" hideNavBar={false}
                onLeft={this.props.logout} leftTitle="Logout"
                rightTitle="Add" onRight={() => Actions.addVictim()}
          />
          <Scene key="addVictim" component={VictimForm} title="New Victim" direction="vertical" />
          <Scene key="showVictim" component={VictimDetail} title="Detail" />
        </Scene>
        <Scene key="statusModal" component={StatusModal} />
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