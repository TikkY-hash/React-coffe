import ActionTypes from "../action-types";
import {
    IFailureCart,
    IFailureLoadBestCart,
    ILoadBestCart,
    ILoadCart,
    ISuccessCart,
    ISuccessLoadBestCart
} from "../types/action-creators-type";

import {ICartDataType} from "../types/reducers-type";

export const onLoadBestCart = () : ILoadBestCart => {
    return  {
        type : ActionTypes.FETCH_BEST_PRODUCT_LOAD
    }
}

export const onSuccessLoadBestCart = (payload : ICartDataType[]) : ISuccessLoadBestCart => {
    return {
        type : ActionTypes.FETCH_BEST_PRODUCT_SUCCESS,
        payload
    }
}

export const onFailureLoadBestCart = (payload : any) : IFailureLoadBestCart => {
    return {
        type : ActionTypes.FETCH_BEST_PRODUCT_FAILURE,
        payload
    }
}

export const onLoadCart = () : ILoadCart => {
    return {
        type : ActionTypes.FETCH_CART_PRODUCT_LOAD
    }
}

export const onSuccessCart = (payload : ICartDataType[]) : ISuccessCart => {
    return {
         type : ActionTypes.FETCH_CART_PRODUCT_SUCCESS,
         payload
    }
}

export const onFailureCart = (payload : any) : IFailureCart => {
    return {
        type : ActionTypes.FETCH_CART_PRODUCT_FAILURE,
        payload
    }
}