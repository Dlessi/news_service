import {
  LOG_OUT,
  LOG_IN,
  SESSION_ERROR,
  UPDATE_USER,
  SET_REGISTRATION,
} from '../actions/session'

const InitialState = {
  user: null,
  registration: null
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      let user = Object.assign({}, action.user)
      return { ...state, user: user }
    }
    case LOG_OUT:
      return { ...state, user: null }
    case SESSION_ERROR: {
      alert('Invalid Login and Password')
      return { ...state }
    }
    case UPDATE_USER: {
      let user = Object.assign({}, action.user)
      return { ...state, user: user }
    }
    case SET_REGISTRATION : {
      return {...state, registration : action.registration}
    }
    default:
      return state
  }
}
