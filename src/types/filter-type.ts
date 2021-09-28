export interface IButtonsList {
    id : number,
    tittle : string
}

export interface ButtonsProps {
    onUpdateId :  (id : number) => void,
    id : number | null
}

export interface FilterProps extends  ButtonsProps {
    onUpdateTerm : (term : string) => void
}

export type IUpdateId = (id : string) => IUpdateId