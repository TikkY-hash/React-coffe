import React, {FC} from 'react';
import styled from "styled-components";

const FooterStyled = styled.footer`
  padding-bottom: 21px;
`

const FooterStyle : FC = (props) => {
    return <FooterStyled {...props}/>
};

export default FooterStyle;