
export type onClick = () => void

export interface ITopLineStyled {
    width : number
}

export interface IArrowTopStyled {
    onClick : onClick
}

export interface IDivStyleProps {
    aboutContentImageWidth : number | undefined,
    aboutContentImageHeight : number | undefined
}

export interface IBurgerProps {
    onTest? : () => void,
    active : boolean
    onClick? : onClick
}

export interface IFlexLayoutStyle {
    justifyContent? : string,
    flexDirection? : string,
    textAlign? : string
}

export interface IColor {
    color : string | undefined
}

export interface IButtonStyle extends IColor{
    key : number,
    onClick : () => void,
}

export interface IHeaderBlockType {
    img : string | undefined,
    backgroundAttachment : string,
    backgroundSize : string,
    paddingHeaderTop : number,
    paddingHeaderBottom : number
}

export interface IActiveTypeValue {
    active? : boolean
}

export interface IListStyleProps {
    backgroundColor : string,
    id : any
    onClick : (() => void) | undefined
}