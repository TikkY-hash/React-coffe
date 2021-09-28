import React, { FC } from 'react';
import LineBlock from "../line-block";
import NavBarWrapper from "../nav-bar-wrapper";
import { FooterStyle } from "../UI";

const Footer : FC = () => {
    return (
            <FooterStyle>
                <NavBarWrapper
                    color={"black"}
                    navBarPosition={"center"}
                />
                <LineBlock color={"black"}/>
            </FooterStyle>
    );
};

export default Footer;