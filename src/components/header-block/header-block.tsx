import React, {FC, useState} from 'react';
import NavBarWrapper from "../nav-bar-wrapper";
import { HeaderBlockPropsType } from "../../types/nav-bar-type";
import BurgerMenuBlock from "../burger-menu-block";
import{ HeaderBlockStyle } from "../UI";

const HeaderBlock : FC<HeaderBlockPropsType> = (props)  => {
    const {
        children,
        headerTittle,
        paddingHeaderBottom,
        paddingHeaderTop,
        backgroundAttachment,
        backgroundSize,
        img
    } = props
    const [active,onUpdateActive] = useState(false)

    return (
        <HeaderBlockStyle
            paddingHeaderTop={paddingHeaderTop}
            img={img}
            paddingHeaderBottom={paddingHeaderBottom}
            backgroundAttachment={backgroundAttachment}
            backgroundSize={backgroundSize}
        >
             <NavBarWrapper
                 {...props}
                 burgerMenu={
                     <BurgerMenuBlock
                         onClick={() => onUpdateActive(!active)}
                         active={active}
                     />
                 }
                 active={active}
             />
             <div className="header__wrapped">
                <h1>{headerTittle}</h1>
                 {children}
             </div>
        </HeaderBlockStyle>
    );
};

export default HeaderBlock;