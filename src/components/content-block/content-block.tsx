import React,{FC} from 'react';
import {ContentPropsType} from "../../types/content-type";
import TextBlock from "../text-block";
import {ContentBlockStyle,Flex} from "../UI";

const ContentBlock : FC<ContentPropsType> =(props)   => {
    return (
        <Flex>
            <ContentBlockStyle>
                <TextBlock {...props}/>
            </ContentBlockStyle>
        </Flex>
    );
};

export default ContentBlock;
