import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import promise from "redux-promise-middleware";
import rootReducers from "./reducers";

const store = createStore (
  rootReducers,
  applyMiddleware(
    promise,
    logger
  )
)

export default store;
