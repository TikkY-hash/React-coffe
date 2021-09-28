import React, {FC} from 'react';
import HeaderBlock from "../header-block";
import ContentBlock from "../content-block";
import {Container} from "reactstrap";
import BestProductsBlock from "../best-products-block";
import HeaderStartPageContent from "../header-start-page-content";
import {startPageData} from "../pages-content";

const StartPage : FC = () => {
    return (
        <>
             <HeaderBlock  {...startPageData} >
                 <HeaderStartPageContent/>
             </HeaderBlock>
             <Container>
                 <ContentBlock {...startPageData}/>
             </Container>
            <BestProductsBlock/>
        </>
    );
};

export default StartPage;