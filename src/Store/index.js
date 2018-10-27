import thunk from "redux-thunk";
import logger from "redux-logger";
import ADD from "../Store/AddUser/Add.reducer";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import User from "../Store/User/User.reducer";

let middleware = applyMiddleware(thunk, logger);
let rootReducer = combineReducers({ ADD, User });
const store = createStore(rootReducer, compose(middleware));
export default store;
