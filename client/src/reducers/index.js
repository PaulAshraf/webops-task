import { combineReducers } from 'redux'
import pageReducer from './pageSlice'

export default combineReducers({
    page: pageReducer,
})