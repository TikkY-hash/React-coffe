import React, {FC} from 'react';
import styled from "styled-components";


const ErrorStyled = styled.div`
  max-width: 480px;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  h1 {
    font-size: 18px;
    padding-right: 10px;
    font-weight: bold;
  }
`

const ErrorStyle : FC = (props) => {
    return <ErrorStyled {...props}/>
};

export default ErrorStyle;