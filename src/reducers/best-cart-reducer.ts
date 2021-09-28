import {IInitialBestCartState} from "../types/reducers-type";
import {IBestProductActionType} from "../types/action-creators-type";
import ActionTypes from "../action-types";

const initialState : IInitialBestCartState = {
    bestCartList : [],
    error : null,
    loading : true
}


const bestCartReducer = (state = initialState,action : IBestProductActionType) : IInitialBestCartState => {
    switch (action.type) {
        case ActionTypes.FETCH_BEST_PRODUCT_LOAD:
            return {
                ...state,
                error : null,
                loading : true
            }
        case ActionTypes.FETCH_BEST_PRODUCT_FAILURE:
            return {
                ...state,
                error : action.payload,
                loading : false
            }
        case ActionTypes.FETCH_BEST_PRODUCT_SUCCESS:
            return {
                loading : false,
                error : null,
                bestCartList : action.payload
            }
        default :
            return state
    }
}

export default bestCartReducer