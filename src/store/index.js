import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

/* const reducer = () => {}; */

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
