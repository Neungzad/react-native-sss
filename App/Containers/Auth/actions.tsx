import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes'
import appConfig from '../../Config/appConfig'
import { Actions } from 'react-native-router-flux'

const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch({ type: LOGIN_REQUEST })

    try {
      // fetch api
      const res = await fetch(`${appConfig.API_URL}/KillerUsers/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const result = await res.json()

      if (result.id) {
        result.token = result.id
        delete result.id

        // dispatch action success
        dispatch({
          type: LOGIN_SUCCESS,
          payload: result
        })
      } else {
        alert(result.error.message)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

const logout = () => {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: LOGOUT_REQUEST })
    const state = getState()

    try {
      // fetch api
      const res = await fetch(`${appConfig.API_URL}/KillerUsers/logout`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': state.auth.token
        }
      })

      if (res.status === 204) {
        dispatch({
          type: LOGOUT_SUCCESS
        })

        Actions.login()
      } else {
        const result = await res.json()
        alert(result.error.message)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export { login, logout }