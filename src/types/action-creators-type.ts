import ActionTypes from "../action-types";
import {ICartDataType} from "./reducers-type";

export interface ILoadBestCart {
    type : ActionTypes.FETCH_BEST_PRODUCT_LOAD
}

export interface ISuccessLoadBestCart {
    type : ActionTypes.FETCH_BEST_PRODUCT_SUCCESS
    payload : ICartDataType[]
}

export interface IFailureLoadBestCart {
    type : ActionTypes.FETCH_BEST_PRODUCT_FAILURE,
    payload : string
}

export interface ILocationChange {
    payload : {
        action : string,
        isFirstRendering : boolean,
        location : {
            pathname : string,
            search : string,
            hash : string,
            state : undefined,
            key : string
        },
        type : string
    }
}

export interface ILoadCart {
    type : ActionTypes.FETCH_CART_PRODUCT_LOAD
}

export interface ISuccessCart {
    type : ActionTypes.FETCH_CART_PRODUCT_SUCCESS,
    payload : ICartDataType[]
}

export interface IFailureCart {
    type : ActionTypes.FETCH_CART_PRODUCT_FAILURE,
    payload : string
}

export type IProductActionType = ILoadCart | ISuccessCart | IFailureCart

export type IBestProductActionType = ILoadBestCart | ISuccessLoadBestCart | IFailureLoadBestCart


