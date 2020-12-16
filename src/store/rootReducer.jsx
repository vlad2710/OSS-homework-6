import { combineReducers } from 'redux';
import { home as homeReducer } from './Home/reducer' 

const rootReducer = combineReducers({
    home: homeReducer
})

export default rootReducer;