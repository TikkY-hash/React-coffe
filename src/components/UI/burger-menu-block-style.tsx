import React, {FC} from 'react';
import styled from "styled-components";
import {IBurgerProps} from "../../types/ui-types";

const BurgerStyle = styled.div<Omit<IBurgerProps, 'onClick'>>`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #CFA87A;
    cursor: pointer;
    display: none;
    position: fixed;
    z-index: 2;
    span {
      position: absolute;
      width: ${props => props.active ? 0 : '30'}px;
      height: 2px;
      background-color: white;
      margin-left: 10px;
      margin-top: 25px;
      &::before {
        position: absolute;
        content: '';
        width: 30px;
        height: 2px;
        background-color: white;
        bottom: ${props => props.active ? 0 : 8}px;
        transform: rotate(${props => props.active ? '45' : '0'}deg);
        transition: 0.5s;
      }
      &::after {
        position: absolute;
        content: '';
        width: 30px;
        height: 2px;
        background-color: white;
        top: ${props => props.active ? 0 : 8}px;
        transform: rotate(${props => props.active ? '-45' : '0'}deg);
        transition: 0.5s;
      }
    }
    @media ${props => props.theme.media.tablet}  {
        & {
          display: block;
          top: 5%;
          left: 2%;
        }
  } 
`


const BurgerMenuBlockStyle : FC<IBurgerProps> = (props) => {
    return <BurgerStyle {...props}/>
};

export default BurgerMenuBlockStyle;