import { LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes'

const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch({ type: LOGIN_REQUEST })

    try {
      // fetch api
      const res = await fetch('http://localhost:3000/api/KillerUsers/login', {
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

export { login }