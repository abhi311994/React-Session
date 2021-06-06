import { combineReducers } from 'redux'
import cakeReducer from '../cakes/reducer/cakeReducer'
import iceCreamReducer from '../icecream/reducer/iceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

export default rootReducer