import React, {FC} from 'react';
import {IActiveType} from "../../types/nav-bar-type";
import NavBarListItem from "../nav-bar-litst-item";
import {MenuStyle} from "../UI";

const Menu : FC<IActiveType> = (props) => {
    const {links,active,color} = props

    return (
        <MenuStyle active={active}>
            <div className="blur"/>
            <div>
                <ul className="d-flex align-items-center justify-content-center flex-column">
                    {links?.map(value => <NavBarListItem {...value} color={color} key = {value.id}/>)}
                </ul>
            </div>
        </MenuStyle>
    );
};

export default Menu;