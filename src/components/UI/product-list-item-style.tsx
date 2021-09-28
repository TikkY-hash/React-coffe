import React, {FC} from 'react';
import styled from "styled-components";
import {IListStyleProps} from "../../types/ui-types";

const ListStyle = styled.li<IListStyleProps>`
  height: 240px;
  background: ${props => props.backgroundColor};
  border-radius: 8px;
  width: 226px;
  margin: 0 auto;
  padding-top: 22px;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2) !important;
    transition: 0.5s;
  }
  .click {
    position: absolute;
    right: 3px;
    top: ${props => props.id === 3 ? '94%' : '10%'};
  }
  span {
    font-size: 14px;
    line-height: 20px;
  }
  .price {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: end;
  }
  .coffee__icon {
    padding-bottom: 14px;
    text-align: center;
  }

  @media ${props => props.theme.media.tablet} {
    &:hover {
      transform: none !important;
      transition: none;
    }
  }
`


const ProductListItemStyle : FC<IListStyleProps> = (props) => {
    return <ListStyle {...props}/>
};

export default ProductListItemStyle;