import React, {FC} from 'react';
import styled from "styled-components";

const FilterPanelElementStyled = styled.div`
 .element__text {
   padding-left: 41px;
   padding-right: 35px;
   h1 {
     font-size: 14px;
     line-height: 20px;
     margin: 0;
    }
  }
  @media ${props => props.theme.media.tablet}{
    display: flex;
    justify-content: center;
    .element__text  {
      padding-left: 0;
      padding-right: 20px;
    }
  }
`

const FilterPanelElementsStyle : FC = (props) => {
    return <FilterPanelElementStyled {...props}/>
};

export default FilterPanelElementsStyle;