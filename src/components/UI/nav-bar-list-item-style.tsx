import React, {FC} from 'react';
import styled from "styled-components";
import {IColor} from "../../types/ui-types";

const ListStyle = styled.li<IColor>`
    list-style: none;
    padding-right: 40px;
   
    &:hover a{
      color: gold;
      transition: 0.5s;
    }
    &:first-child {
      transition: 0.5s all;
      a {
        display: flex;
        align-items: center;
      }
      svg { 
        margin-top: -3vh;
        transition: 0.5s;
      }
      &:hover {
        svg {
          fill: gold;
          transition: 0.5s;
        }
      }
    }
    a {
      text-decoration: none;
      transition: 0.5s;
      color: ${props => props.color};
    }
`

const NavBarListItemStyle : FC<IColor> = (props) => {
    return <ListStyle {...props}/>
};

export default NavBarListItemStyle;