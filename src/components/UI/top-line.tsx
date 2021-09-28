import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {ITopLineStyled} from "../../types/ui-types";

const StyledTopLine = styled.div<ITopLineStyled>`
  position: fixed;
  height: 4px;
  width: ${props => props.width}%;
  background: #CFA87A;
  border-radius: 42px;
  transition: 0.2s;
  z-index: 4;
`

const TopLine : FC = (props) => {

    const [scrollWidth,onUpdateScrollWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll',() => {
            const element = document.documentElement

            const scrollHeight = element.scrollTop
            const windowHeight = element.scrollHeight - element.clientHeight

            onUpdateScrollWidth((scrollHeight / windowHeight) * 100)
        })
    },[])


    return <StyledTopLine width={scrollWidth}/>
}

export default TopLine;