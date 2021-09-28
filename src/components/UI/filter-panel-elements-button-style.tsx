import React, {FC} from 'react';
import styled from "styled-components";
import {Button} from "reactstrap";
import {IButtonStyle} from "../../types/ui-types";

const ButtonStyle = styled(Button)<IButtonStyle>`
  background: ${props => props.color};
  color: black;
  border: none;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  margin-right: 5px;
  font-size: 12px;
  line-height: 17px;
`

const FilterPanelElementsButtonStyle : FC<IButtonStyle> = (props) => {
    return <ButtonStyle {...props}/>
};

export default FilterPanelElementsButtonStyle;