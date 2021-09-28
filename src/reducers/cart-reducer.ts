import {IInitialCartState} from "../types/reducers-type";
import {IProductActionType} from "../types/action-creators-type";
import ActionTypes from "../action-types";

const initialState : IInitialCartState = {
    loading : true,
    error : null,
    cartList : []
}

const cartReducer = ( state = initialState,action : IProductActionType) : IInitialCartState => {
    switch (action.type) {
        case ActionTypes.FETCH_CART_PRODUCT_LOAD :
            return {
                ...state,
                loading : true
            }
        case ActionTypes.FETCH_CART_PRODUCT_SUCCESS :
              return {
                  loading : false,
                  error : null,
                  cartList : action.payload
              }
        case ActionTypes.FETCH_CART_PRODUCT_FAILURE :
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}

export default cartReducer