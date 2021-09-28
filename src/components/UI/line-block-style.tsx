import React, {FC} from 'react';
import styled from "styled-components";
import {IColor} from "../../types/ui-types";

const LineBlockStyled = styled.div<IColor>`
  width: 60px;
  height: 2px;
  background-color: ${props => props.color};
  margin : 35px 1%;
`


const LineBlockStyle : FC<IColor> = (props) => {
    return <LineBlockStyled {...props}/>
};

export default LineBlockStyle;