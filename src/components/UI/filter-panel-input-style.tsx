import React, {FC} from 'react';
import styled from "styled-components";

const FilterPanelInputStylePosition = styled.div`
  .input__text {
    padding-right: 19px;
    h3 {
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }
  }
  .input__div {
    input {
      width: 180px;
      height: 30px;
      background: #FFFFFF;
      border: none;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      padding-right: 41px;
      &::placeholder {
        text-align: center;
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
  @media ${props => props.theme.media.tablet} {
    display: flex;
    justify-content: center;
    margin-bottom: 8%;
  }
`



const FilterPanelInputStyle : FC = (props) => {
    return <FilterPanelInputStylePosition {...props}/>
};

export default FilterPanelInputStyle;