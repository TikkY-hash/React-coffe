import React,{FC} from 'react';
import {ContentPropsType} from "../../types/content-type";
import TextContentHeaderBlock from "../text-content-header-block";
import {TextBlockStyle,Flex} from "../UI";

const TextBlock : FC<ContentPropsType> = React.memo((props)  => {
    const { content,maxWidthText , paddingContentTop} = props

    return (
        <TextBlockStyle
            maxWidthText={maxWidthText}
            paddingContentTop = {paddingContentTop}
        >
            <Flex justifyContent={'start'} flexDirection={'column'}>
                <TextContentHeaderBlock {...props}/>
                <div className="text">
                    {content.map(value =>
                            <p key={value.id}> {value.text} </p>
                        )}
                </div>
            </Flex>
        </TextBlockStyle>
    );
});

export default TextBlock;