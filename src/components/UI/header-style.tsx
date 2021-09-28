import React, {FC} from 'react';
import styled from "styled-components";

const Header = styled.div`
  h1 {
    font-size: 24px ;
    line-height: 35px;
    margin: 0;
  }
`

const HeaderStyle : FC = (props) => {
    return <Header {...props}/>
};

export default HeaderStyle;