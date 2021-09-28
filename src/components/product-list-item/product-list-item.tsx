import React, {FC} from 'react';
import {ICartType} from "../../types/reducers-type";
import {Container} from "reactstrap";
import listImage from './Vector.png'
import {ProductListItemStyle} from "../UI";

const ProductListItem : FC<ICartType>  = (props) => {
    const {render,image,price,backgroundColor,onClick,cartId,id} = props

    const clickImage = (
        <div className="click">
            <img src={listImage} width="22" height="27" alt="click"/>
        </div>
    )

    const result = id === cartId ?  clickImage  : null

    return (
        <ProductListItemStyle
            backgroundColor={backgroundColor}
            onClick={onClick}
            id={cartId}
        >
            <Container>
                <div className="coffee__icon">
                    <img
                        src = {process.env.PUBLIC_URL + `${image}`}
                        alt = "best product"
                       />
                </div>
                {render(props)}
                <h1 className="price">{price}$</h1>
            </Container>
            {result}
        </ProductListItemStyle>
    );
};

export default ProductListItem;