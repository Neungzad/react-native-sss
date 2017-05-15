import { VICTIMS_REQUEST, VICTIMS_SUCCESS, VICTIM_ADD_SUCCESS } from './actionTypes'
import appConfig from '../../Config/appConfig'
import { Victim } from '../../types'
import { Actions } from 'react-native-router-flux'

const loadVictims = () => {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: VICTIMS_REQUEST })

    const state = getState()

    try {
      // fetch api
      const res = await fetch(`${appConfig.API_URL}/Victims`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': state.auth.token
        }
      })
      const result = await res.json()

      if (result.error) {
        Actions.login()
      } else {
        // dispatch action success
        dispatch({
          type: VICTIMS_SUCCESS,
          payload: result
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

const addVictim = (victimForm: Victim) => {
  return async (dispatch: any, getState: any) => {
    const state = getState()
    let formdata = new FormData()

    if (victimForm.image) {
      try {
        let file: any = {
          uri: victimForm.image.uri,
          type: victimForm.image.type,
          name: victimForm.image.fileName
        }

        formdata.append('file', file)
        formdata.append('name', victimForm.name)
        formdata.append('nickname', victimForm.nickname)
        formdata.append('reward', victimForm.reward)
        formdata.append('userId', state.auth.userId)

        const res = await fetch(`${appConfig.API_URL}/Victims/upload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': state.auth.token
          },
          body: formdata
        })

        const result = await res.json()
        if (result.error) {
          alert(result.error.message)
        } else {
          dispatch({
            type: VICTIM_ADD_SUCCESS,
            payload: result
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export { loadVictims, addVictim }