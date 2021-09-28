import React, {FC} from 'react';
import styled from "styled-components";

const UlStyle = styled.ul`
  padding-top: 39px;
  padding-right: 0;
  padding-left: 0;
  li {
    list-style: none;
    margin-bottom: 110px;
  }
`


const ProductListStyle : FC = (props) => {
    return <UlStyle {...props}/>
};

export default ProductListStyle;