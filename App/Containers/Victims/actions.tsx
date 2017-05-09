import { VICTIMS_REQUEST, VICTIMS_SUCCESS } from './actionTypes'
import appConfig from '../../Config/appConfig'

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

      // dispatch action success
      dispatch({
        type: VICTIMS_SUCCESS,
        payload: result
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export { loadVictims }