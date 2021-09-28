import {ReactNode} from "react";

export interface ContentType {
    id : number,
    text : string
}

export interface ContentPropsType {
    tittle : string,
    paddingContentTop : number
    content : ContentType[],
    maxWidthText : number,
    aboutContentImage? : string,
    children? : ReactNode
    rightBlock? : ReactNode,
    aboutContentImageWidth? : number,
    aboutContentImageHeight? : number
}