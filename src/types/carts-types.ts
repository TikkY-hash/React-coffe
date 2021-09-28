import React from "react";
import {ICartDataType, ICartType} from "./reducers-type";

export interface IRenderData {
    weight : number,
    country? : string
    tittle : string,
}

export type IRenderType =  (data : IRenderData) => React.ReactNode

export interface IRenderProps {
    render : IRenderType,
    backgroundColor : string,
    data : ICartDataType[],
    id? : number,
    loading : boolean,
    error : any
}




