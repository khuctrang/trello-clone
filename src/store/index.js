import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/* const reducer = () => {}; */
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

const persistor = persistStore(store);

export default () => ({ store, persistor });
