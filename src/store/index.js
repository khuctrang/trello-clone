import { createStore } from "redux";
import reducers from "../reducers";

/* const reducer = () => {}; */

const store = createStore(reducers);

export default store;
