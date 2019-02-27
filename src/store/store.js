// import { createStore } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Authreducer from './Reducers/authReducer'
import { patientReducer } from './Reducers/DocotrReducer'

const store = createStore(
  combineReducers({
    Authreducer,
    patientReducer
  }),
  applyMiddleware(thunk)
)

export default store
