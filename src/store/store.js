// import { createStore } from "react-redux";
import { createStore, applyMiddleware,combineReducers } from "redux";
import  thunk from "redux-thunk";
import Authreducer from "./Reducers/authReducer";

const store = createStore(
    combineReducers({
        Authreducer
    }),
    applyMiddleware(thunk));

export default store;