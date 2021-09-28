import {call, fork,take,put} from 'redux-saga/effects'
import {LOCATION_CHANGE} from "connected-react-router";
import {ILocationChange} from "../types/action-creators-type";
import {getRequest} from "./get-request";
import {ICartType} from "../types/reducers-type";
import {onSuccessCart,onFailureCart} from "../action-creators/action-creators";

export function* getCartDataWorker() {
    try{
         const result : ICartType[] = yield call(getRequest,'/product')

         yield put(onSuccessCart(result))
    }catch (error) {
        yield put(onFailureCart(error))
    }

}

export function* watcherCart () {
    while (true) {
        const action : ILocationChange = yield take(LOCATION_CHANGE)

        const location = action.payload.location.pathname

        if(location.indexOf('our-coffee-page/') > -1 || location.endsWith('for-your-pleasure-page/')) {
            yield fork(getCartDataWorker)
        }
    }
}