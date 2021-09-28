import React, {FC} from 'react';
import {Container} from "reactstrap";
import ProductList from "../product-list";
import { IRenderData} from "../../types/carts-types";
import {useTypedSelector} from "../../hooks";
import {BestProductBlockStyle} from "../UI";

const BestProductsBlock  : FC = () => {
    const {bestCartList,loading,error} = useTypedSelector(state => state.bestCartReducer)


    return (
        <BestProductBlockStyle>
            <Container >
                <h1 >Our best</h1>
            </Container>
            <ProductList
                render={({weight,tittle} : IRenderData) => <span>{tittle} {weight} kg</span>}
                backgroundColor="rgba(255, 255, 255, 0.65)"
                data = {bestCartList}
                loading={loading}
                error={error}
            />
        </BestProductBlockStyle>
    );
};

export default BestProductsBlock;