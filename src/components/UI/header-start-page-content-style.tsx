import React, {FC} from 'react';
import styled from "styled-components";

const DivStyle = styled.div`
  padding-bottom: 201px;
  
  @media(max-width: 786px){
      padding-bottom: 150px;
  }
`

const HeaderStartPageContentStyle : FC  = (props) => {
    return <DivStyle {...props}/>
};

export default HeaderStartPageContentStyle;