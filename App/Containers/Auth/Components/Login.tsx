import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
// import { Actions } from 'react-native-router-flux'
import t from 'tcomb-form-native'

const Form = t.form.Form;

// here we are: define your domain model
const login = t.struct({
  email: t.String,
  password: t.String
});

const options = {}

export interface Props { }
export interface State { }

class Login extends Component<Props, State> {
  constructor() {
    super()

    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    const value = this.refs.login.getValue()
    if (value)
      console.log(value)
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

export default Login;