import { SET_NEWS, DELETE_NEW, ADD_NEW, UPDATE_NEW } from '../actions/news'

const InitialState = {
  news: [],
  setNews: false,
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case SET_NEWS: {
      return { ...state, news: action.news, setNews: true }
    }
    case DELETE_NEW: {
      let arr = state.news.filter(item => {
        return item._id !== action.id
      })
      return { ...state, news: arr }
    }
    case ADD_NEW: {
      return { ...state, news: [...state.news, action.myNew] }
    }
    case UPDATE_NEW: {
      let arr = state.news.filter(item => {
        return item._id !== action.myNew._id
      })
      return { ...state, news: [...arr, action.myNew] }
    }
    default:
      return state
  }
}
