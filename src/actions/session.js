export const LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
  SESSION_ERROR = 'SESSION_ERROR',
  UPDATE_USER = 'UPDATE_USER',
  SET_REGISTRATION = 'SET_REGISTRATION'

export function LogIn(params) {
  return dispatch => {
    let jsonLog = JSON.stringify(params)
    let request = new XMLHttpRequest()
    request.open('POST', '/api/session/log', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
      let user = JSON.parse(request.response)
      if (user) {
        dispatch({ type: LOG_IN, user: user })
      } else {
        dispatch({ type: SESSION_ERROR })
      }
    })
    request.send(jsonLog)
  }
}


export function updateUser(user) {
  return dispatch => {
    let jsonUser = JSON.stringify(user)
    let request = new XMLHttpRequest()
    request.open('POST', '/api/session', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
      dispatch({ type: UPDATE_USER, user: user })
    })
    request.send(jsonUser)
  }
}

export function setRegisterArgs() {
  return dispatch => {
    let request = new XMLHttpRequest()
    request.open('GET', '/api/registration', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
      let user = JSON.parse(request.response)
      dispatch({ type: SET_REGISTRATION, registration: user })
    })
    request.send()
  }
}

export function LogOut() {
  return { type: LOG_OUT }
}
