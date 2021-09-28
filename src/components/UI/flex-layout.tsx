import React, {FC} from 'react';
import styled from "styled-components";
import {IFlexLayoutStyle} from "../../types/ui-types";

const FlexStyle = styled.div<IFlexLayoutStyle>`
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: center;
  flex-direction: ${props => props.flexDirection || 'row'};
  text-align: ${props => props.textAlign || 'center'};
`

const Flex: FC<IFlexLayoutStyle> = (props) => {
    return <FlexStyle {...props}/>
};

export default Flex;