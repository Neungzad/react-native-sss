import { VICTIMS_REQUEST, VICTIMS_SUCCESS } from './actionTypes'

const loadVictims = () => {
  return async (dispatch: any) => {
    dispatch({ type: VICTIMS_REQUEST })

    try {
      // fetch api
      const res = await fetch('https://raw.githubusercontent.com/Neungzad/api/master/assassinList.json')
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