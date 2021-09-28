import React, {FC} from 'react';
import TextContentHeaderBlock from "../text-content-header-block";
import {useTypedSelector} from "../../hooks";
import {useParams} from "react-router";
import {CartTextContentStyle,Flex} from "../UI";
import Loading from "../loading";

interface IUserItemPageParams {
    id : string
}

const CartTextContent : FC = () => {
    const {id} = useParams<IUserItemPageParams>()
    const {cartList,loading} = useTypedSelector(state => state.cartReducer)

    if(loading) {
        return (
            <Flex>
                <Loading/>
            </Flex>
        )
    }

    const {country,price} = cartList.filter(value => value.id === +id)[0]

    return (
        <div>
            <Flex flexDirection={'column'}>
                <TextContentHeaderBlock tittle={'About it'}/>
            </Flex>
            <CartTextContentStyle>
               <ul>
                   <li>
                      <p>
                          <span className="country__label">Country: </span>
                          {country}
                      </p>
                   </li>
                   <li>
                       <p className = "description__text">
                           <span className="country__label">Description: </span>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                           aliquip ex ea commodo consequat.
                       </p>
                   </li>
                   <li className="d-flex">
                       <p className = "price__content">
                           <span className="country__label">Price: </span>
                           <span className="price">{price}$</span>
                       </p>
                   </li>
               </ul>
            </CartTextContentStyle>
        </div>
    );
};

export default CartTextContent;