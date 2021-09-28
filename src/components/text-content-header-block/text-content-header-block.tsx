import React,{FC} from 'react';
import LineBlock from "../line-block";
import {HeaderStyle} from "../UI";

const TextContentHeaderBlock : FC<{tittle : string}> = ({tittle}) => {
    return (
        <>
            <HeaderStyle>
                <h1>{tittle}</h1>
            </HeaderStyle>
            <LineBlock color="black"/>
        </>
    );
};

export default TextContentHeaderBlock;