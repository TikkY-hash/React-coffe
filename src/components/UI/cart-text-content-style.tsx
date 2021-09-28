import React, {FC} from 'react';
import styled from "styled-components";

const MainContentStyle = styled.div`
  ul {
    list-style: none;
    li {
      .country__label {
        font-weight: bold;
      }
      font-style: normal;
      font-size: 14px;
      line-height: 20px;
      padding-bottom: 16px;
      .description__text {
        max-width: 457px;
        height: 100%;
      }
      .price {
        font-size: 30px;
        padding-left: 10px;
        font-weight: bold;
      }
    }
  }
`


const CartTextContentStyle : FC = (props) => {
    return <MainContentStyle {...props}/>
};

export default CartTextContentStyle;