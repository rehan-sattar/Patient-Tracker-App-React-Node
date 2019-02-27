import { Actions } from '../Actions/AllActions'
let defaultState = {
  user: null,
  authToken: null
}

const Authreducer = (state = defaultState, action) => {
  let newState = { ...state }
  switch (action.type) {
    // signup actions
    case Actions.userSignUpSuccess:
      newState.user = action.payload.user
      newState.authToken = action.payload.token
      localStorage.setItem('doctor_id', action.payload.token)
      break
    case Actions.userSignUpError:
      return newState
    // login actions
    case Actions.userLoginSuccess:
      console.log('Dispatchde!', action.payload)
      newState.user = action.payload
      newState.authToken = action.payload.token
      localStorage.setItem('doctor_id', action.payload.token)
      break
    case Actions.userLogoutSuccess:
      localStorage.removeItem('doctor_id')
    case Actions.userloginError:
      return newState
  }
  return newState
}

export default Authreducer
