import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers, {history} from "./reducers";
import rootSaga from "./sagas";
import {routerMiddleware} from "connected-react-router";

const saga = createSagaMiddleware()

const store = createStore(reducers,composeWithDevTools(applyMiddleware(saga,routerMiddleware(history))))

saga.run(rootSaga)


export default store