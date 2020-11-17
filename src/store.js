import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/productsRducers'
// init state
const initialState = {}
// compse handle
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_OMPOSE__ || compose


// create store
const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  initialState,
  composeEnhacer(applyMiddleware(thunk))
)
export default store

