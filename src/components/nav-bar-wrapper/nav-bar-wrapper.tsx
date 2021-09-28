import React,{useContext,FC} from 'react';
import {Container} from "reactstrap";
import {NavBarPropsType} from "../../types/nav-bar-type";
import Context from "../context";
import NavBarListItem from "../nav-bar-litst-item";
import Menu from "../menu";
import {NavBarWrapperStyle,Flex} from "../UI";

const NavBarWrapper : FC<NavBarPropsType> = (props) => {
    const {burgerMenu} = props

    const links = useContext(Context)

    return (
        <Container >
            <NavBarWrapperStyle>
                <Flex justifyContent={props.navBarPosition}>
                    <ul>
                        {links.map(value => <NavBarListItem {...value} color={props.color} key = {value.id}/>)}
                    </ul>
                </Flex>
                {burgerMenu}
            </NavBarWrapperStyle>
            <Menu {...props} links={links}/>
        </Container>
    );
};

export default NavBarWrapper;