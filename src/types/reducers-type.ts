import {IRenderType} from "./carts-types";

export interface  ICartDataType {
    tittle : string,
    id : number,
    weight : number,
    price : number,
    image : string,
    country? : string
}

export interface ICartType extends ICartDataType{
    render : IRenderType ,
    backgroundColor : string ,
    onClick? : () => void,
    cartId? : number | undefined
}

export interface IFakeApi {
    bestCartListData : {
        bestp : ICartDataType[]
    },
    cartListData : {
        product : ICartDataType[]
    }
}

export interface IInitialCartTemplate {
    loading : boolean,
    error : null | string,
}

export interface IInitialBestCartState extends IInitialCartTemplate{
    bestCartList : ICartDataType[]
}

export interface IInitialCartState extends IInitialCartTemplate{
    cartList: ICartDataType[]
}