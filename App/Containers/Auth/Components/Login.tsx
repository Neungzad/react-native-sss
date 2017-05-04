import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import { login as loginAction } from '../actions'
import { AppState, AuthState } from '../../../types'

const Form = t.form.Form;

// here we are: define your domain model
const login = t.struct({
  email: t.String,
  password: t.String
});

const options = {}

export interface Props {
  login: (email: string, password: string) => void
  auth: AuthState
}

export interface State { }

class Login extends Component<Props, State> {
  public refs: {
    login: any;
  };

  constructor() {
    super()

    this.onPress = this.onPress.bind(this)
  }

  componentDidUpdate(_prevProps: Props, _prevState: State) {
    if (this.props.auth.userId) {
      Actions.victimListView()
    }
  }

  onPress() {
    const value = this.refs.login.getValue()
    if (value) {
      console.log(value);
      this.props.login(value.email, value.password)
    }
  }

  render() {
    return (
      <View>
        <Text>Login form</Text>
        <Form
          ref="login"
          type={login}
          options={options}
        />
        <TouchableHighlight onPress={this.onPress} underlayColor="#99d9f4">
          <Text>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (email: string, password: string) => { dispatch(loginAction(email, password)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);