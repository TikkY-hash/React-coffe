import React,{FC} from 'react';
import {BurgerMenuBlockStyle} from "../UI/";
import {IBurgerProps} from "../../types/ui-types";

const BurgerMenuBlock : FC<IBurgerProps> = (props) => {
    return (
        <BurgerMenuBlockStyle {...props} >
            <span/>
        </BurgerMenuBlockStyle>
    );
};

export default BurgerMenuBlock;