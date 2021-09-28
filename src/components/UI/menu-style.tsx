import React, {FC} from 'react';
import styled from "styled-components";
import {IActiveTypeValue} from "../../types/ui-types";

const DivMenuStyled = styled.div<IActiveTypeValue>`
  transition: 0.5s;
  position: fixed;
  height: 100vh;
  width: 50vw;
  background-color: #E3C88B;
  top: 0;
  left: 0;
  transform: ${({active}) => active ? 'translateX(0px)' : 'translateX(-300%)'};
  z-index: 1;
  ul {
    list-style: none;
    padding: 0;
    margin-top: 45%;
    li {
      padding: 0;
      padding-top: 50px;
      svg {
        display: none;
      }
    }
  }
  .blur {
    position: absolute;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
    left: 100%;
  }
  @media ${props => props.theme.media.phone} {
    width: 100vw;
    height: 100%;
  }
`

const MenuStyle : FC<IActiveTypeValue> = (props) => {
    return <DivMenuStyled {...props}/>
};

export default MenuStyle;