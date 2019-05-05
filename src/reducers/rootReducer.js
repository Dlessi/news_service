import { combineReducers } from 'redux'
import session from './index'
import news from './newsReducer'

export default combineReducers({ session, news })
