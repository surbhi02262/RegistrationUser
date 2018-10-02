import thunk from "redux-thunk";
import logger from "redux-logger";
import AddProducts from "../Store/AddProducts/AddProducts.reducer";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import Headers from "../Store/Header/Header.reducer";

let middleware = applyMiddleware(thunk, logger);
let rootReducer = combineReducers({ AddProducts, Headers });
const store = createStore(rootReducer, compose(middleware));
export default store;
