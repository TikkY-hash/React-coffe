import React, {FC} from 'react';
import HeaderBlock from "../header-block";
import ourCoffeePageContent from "../pages-content/our-coffee-page-content";
import AboutContentBlock from "../about-content-block";
import CartTextContent from "../cart-text-content";

const CartPage : FC = () => {
    return (
        <>
            <HeaderBlock {...ourCoffeePageContent} burgerMenu={false}/>
            <AboutContentBlock
                {...ourCoffeePageContent}
                aboutContentImage={process.env.PUBLIC_URL + '../81tGmkXdGLL.jpg'}
                rightBlock={<CartTextContent/>}
                aboutContentImageHeight={355}
                aboutContentImageWidth={392}
            />
        </>
    );
};

export default CartPage;