import React, {FC} from 'react';
import {IDivStyleProps} from "../../types/ui-types";
import styled from "styled-components";

const AboutContentBlockStyled = styled.div<IDivStyleProps>`
  padding-top: 70px;
  padding-bottom: 117px;
  .image__position {
     text-align: end;
     padding-right: 5%;
  }
  .line__block {
    margin: 0 auto;
    .line {
      margin-top: 57px;
      width: 240px;
      height: 1px;
      background-color: black;
    }
  }
  @media ${props => props.theme.media.tablet} {
    .image__position {
      text-align: center;
      margin-bottom: 20%; 
      padding-right: 0;
      img {
        width: 100%;
        height: 100%;
        max-width: ${props => props.aboutContentImageWidth}px;
        max-height: ${props => props.aboutContentImageHeight}px;
      }
    }
    & {
      padding-bottom: 60px;
    }
  }
`


const AboutContentBlockStyle : FC<IDivStyleProps> = (props) => {
   return <AboutContentBlockStyled {...props}/>
};

export default AboutContentBlockStyle;