export const SET_NEWS = 'SET_NEWS',
  DELETE_NEW = 'DELETE_NEW',
  ADD_NEW = 'ADD_NEW',
  UPDATE_NEW = 'UPDATE_NEW'


export function setNews() {
  return dispatch => {
    let request = new XMLHttpRequest()
    request.open('GET', '/api/getNews', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
      let news = JSON.parse(request.response)
      dispatch({ type: SET_NEWS, news: news })
    })
    request.send()
  }
}

export function updateNew(myNew) {
  return dispatch => {
    let jsonNew = JSON.stringify(myNew)
    let request = new XMLHttpRequest()
    request.open('POST', 'api/updateNew', true)
    request.setRequestHeader('Content-Type','application/json')
    request.addEventListener('load', () => {
      dispatch({ type: UPDATE_NEW, myNew: myNew })
    })
    request.send(jsonNew)
  }
}

export function deleteNew(id) {
  return dispatch => {
    let jsonId = JSON.stringify({id : id})
    let request = new XMLHttpRequest()
    request.open('POST', 'api/deleteNew', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
      dispatch({ type: DELETE_NEW, id: id })
    })
    request.send(jsonId)
  }
}

export function addNew(myNew) {
  return dispatch =>{
    let jsonNew = JSON.stringify(myNew)
    let request = new XMLHttpRequest()
    request.open('POST', '/api/addNew', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
      let addNew = JSON.parse(request.response)
      dispatch({type: ADD_NEW, myNew: addNew})
    })
    request.send(jsonNew)
  }
}
