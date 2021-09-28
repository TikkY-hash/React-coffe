import React, { FC } from 'react';
import styled from "styled-components";

interface IDivPosition {
    maxWidthText : number,
    paddingContentTop : number
}

const DivPosition = styled.div<IDivPosition>`
  display: flex;
  justify-content: start;
  text-align: center;
  .text {
    max-width: ${props => props.maxWidthText}px;
    margin: 0 auto;
    padding-top: ${props => props.paddingContentTop}px;
    p {
      font-size: 14px;
      line-height: 23px;
    }
  }
  
  @media ${props => props.theme.media.tablet} {
    & {
      justify-content: center;
    }
    .text p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`


const TextBlockStyle : FC<IDivPosition> = (props) => {
    return <DivPosition {...props}/>
};

export default TextBlockStyle;