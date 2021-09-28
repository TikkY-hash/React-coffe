import React, {FC} from 'react';
import styled from "styled-components";

const ContentBlockStyled = styled.div`
  padding-top: 80px;
  padding-bottom: 101px;
`

const ContentBlockStyle: FC = (props) => {
    return <ContentBlockStyled {...props}/>
};

export default ContentBlockStyle;