import {watcherBestCart} from "./get-best-cart-saga";
import {watcherCart} from "./get-cart-data";
import {spawn,all} from "redux-saga/effects";

export function* rootSaga() {
    yield all([
        spawn(watcherBestCart),
        spawn(watcherCart)
    ])
}