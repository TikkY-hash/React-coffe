import React, {FC} from 'react';
import LineBlock from "../line-block";
import {HeaderStartPageContentStyle} from "../UI";

const HeaderStartPageContent : FC = () => {
    return (
        <HeaderStartPageContentStyle>
            <LineBlock color="white"/>
            <h2>We makes every day full of energy and taste</h2>
            <h2>Want to try our beans?</h2>
            <button onClick={() => window.scrollBy(0,448)}>
                More
            </button>
        </HeaderStartPageContentStyle>
    );
};

export default HeaderStartPageContent;