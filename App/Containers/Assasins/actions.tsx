import { FETCH_ASSA_REQUEST, FETCH_ASSA_SUCCESS } from './actionTypes'

const fetchAssaRequest = () => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_ASSA_REQUEST })

    try {
      // fetch api
      const res = await fetch('https://raw.githubusercontent.com/Neungzad/api/master/assassinList.json')
      const result = await res.json()

      // dispatch action success
      dispatch({
        type: FETCH_ASSA_SUCCESS,
        payload: result
      })
    } catch (e) {
      console.log(e)
    }
  }
}


export { fetchAssaRequest }