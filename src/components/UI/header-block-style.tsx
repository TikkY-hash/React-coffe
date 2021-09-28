import React, {FC} from 'react';
import styled from "styled-components";
import {IHeaderBlockType} from "../../types/ui-types";

const DivWrapper = styled.header<IHeaderBlockType>`
  background: url(${props => props.img})  no-repeat;
  background-size: ${props => props.backgroundSize};
  background-attachment: ${props => props.backgroundAttachment};
  .header__wrapped {
    padding-top: ${props => props.paddingHeaderTop}px;
    text-align: center;
    h1 {
      font-size: 40px;
      line-height: 58px;
      color: #FFFFFF;
      padding-bottom: ${props => props.paddingHeaderBottom}px;
    }
    h2 {
      font-size: 24px;
      line-height: 35px;
      color: #FFFFFF;
    }
    button {
      margin-top: 18px;
      width: 150px;
      height: 40px;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 3px;
      background: none;
      transition: 0.5s;
      color: white;
      padding-top: 2px;
      &:hover {
        -webkit-box-shadow: 0px 0px 5px 15px rgba(255, 255, 255, 0.6);
        -moz-box-shadow: 0px 0px 5px 15px rgba(255, 255, 255, 0.6);
        box-shadow: 0px 0px 5px 15px rgba(255, 255, 255, 0.6);
      }
    }
  }
  @media ${props => props.theme.media.tablet} {
    .header__wrapped {
      h1 {
        font-size: 30px;
        line-height: 50px;
      }

      h2 {
        font-size: 20px;
        line-height: 30px;
      }

      button {
        width: 130px;
        height: 40px;
        &::hover {
          box-shadow : none;
        }
      }
    }
  }
  @media ${props => props.theme.media.phone} {
    .header__wrapped {
      h1 {
        font-size: 22px;
        line-height: 50px;
      }

      h2 {
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
  
`

const HeaderBlockStyle : FC<IHeaderBlockType> = (props) => {
    return <DivWrapper {...props}/>
};

export default HeaderBlockStyle;