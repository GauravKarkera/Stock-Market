import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import searchbarReducer from "../reducers/searchbarReducer"

const allReducers=combineReducers({
    searchbarReducer
})
let store = null

store = createStore(allReducers,applyMiddleware(thunk))

export default store