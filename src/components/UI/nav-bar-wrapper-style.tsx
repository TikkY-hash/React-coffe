import React, {FC} from 'react';
import styled from "styled-components";


const NavStyle = styled.nav`
  padding-top: 52px;
  display: block;
  ul {
    display: flex;
    padding-left: 0;
    padding-top: 2vh;
    align-items: center;
  }
  
  @media ${props => props.theme.media.tablet} {
    & {
      justify-content: start;
      ul {
        display: none;
      }
    }
  }
`


const NavBarWrapperStyle : FC = (props) => {
    return <NavStyle {...props}/>
};

export default NavBarWrapperStyle;