import { createStore, combineReducers } from 'redux'
import colors from './reducers/colors'

const reducers = combineReducers({ colors })


export default createStore(reducers)