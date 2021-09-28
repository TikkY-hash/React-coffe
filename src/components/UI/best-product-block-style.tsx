import React, {FC} from 'react';
import styled from "styled-components";
import image from "./paper-1074131_1920.png";


const BestProductStyled = styled.section`
    background: url(${image}) no-repeat fixed;
    background-size: cover;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 40px;
    h1 {
      font-size: 24px;
      line-height: 35px;
      color: #000000
    }
`

const BestProductBlockStyle : FC = (props) => {
    return <BestProductStyled {...props}/>
};

export default BestProductBlockStyle;