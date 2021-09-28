import {combineReducers} from "redux";
import bestCartReducer from "./best-cart-reducer";
import {createBrowserHistory} from "history";
import {connectRouter} from 'connected-react-router'
import cartReducer from "./cart-reducer";

export const history = createBrowserHistory()

const reducers = combineReducers({
    bestCartReducer,
    cartReducer,
    router : connectRouter(history)
})

export type ReducerType = ReturnType<typeof reducers>

export default reducers