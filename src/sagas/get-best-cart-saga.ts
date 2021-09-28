import {fork,call,put} from 'redux-saga/effects'
import elements from "../action-creators/";
import {getRequest} from "./get-request";
import {ICartType} from "../types/reducers-type";

export function* worker() {
    try{
        const result : ICartType[] = yield call(getRequest,'/best_product')

        yield put(elements.onSuccessLoadBestCart(result))
    }catch (error) {
        yield put(elements.onFailureLoadBestCart(error))
    }
}


export function* watcherBestCart() {
   yield fork(worker)
}