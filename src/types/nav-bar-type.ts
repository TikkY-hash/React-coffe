import React, {ReactNode} from "react";
import {IActiveTypeValue} from "./ui-types";

export interface NavBarPropsType extends IActiveType{
    color : string,
    navBarPosition : string,
    burgerMenu? : ReactNode | null,

}

export interface INavBarContext {
    id : number,
    path : string,
    label : string
}

export interface INavBarListItem extends INavBarContext{
    color? : string
}

export interface IActiveType extends IActiveTypeValue{
    links? : INavBarContext[],
    color : string
}

export interface HeaderBlockPropsType extends NavBarPropsType {
    img : string,
    headerTittle : string
    children? : React.ReactNode,
    paddingHeaderTop : number,
    backgroundSize : string,
    backgroundAttachment : string,
    paddingHeaderBottom : number,

}