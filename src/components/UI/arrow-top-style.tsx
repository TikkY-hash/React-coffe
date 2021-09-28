import React, {FC} from 'react';
import styled from "styled-components";
import {IArrowTopStyled} from "../../types/ui-types";

const ArrowTopStyled = styled.div`
  position: fixed;
  right: 42px;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 60px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  img {
    margin-left: 24%;
  }
  &:hover {
    -webkit-box-shadow: 0px 0px 15px 6px rgba(255,34,34,0.54);
    box-shadow: 0px 0px 15px 6px rgba(255,34,34,0.54);
  }
  
  @media ${props => props.theme.media.phoneL} {
    right : 10px;
  }
  @media ${props => props.theme.media.tablet} {
    &:hover {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }
`

const ArrowTopStyle : FC<IArrowTopStyled> = (props) => {
    return <ArrowTopStyled {...props}/>;
};

export default ArrowTopStyle;