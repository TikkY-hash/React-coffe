import React, {FC} from 'react';
import {IRenderProps} from "../../types/carts-types";
import {Col, Container, Row} from "reactstrap";
import ProductListItem from "../product-list-item";
import {useHistory} from "react-router";
import {ProductListStyle,Flex} from "../UI";
import Loading from "../loading";
import Error from "../error";

const ProductList : FC<IRenderProps> = 
    ({
            render,backgroundColor,
            data,id :
            cartId,
            loading,
            error
        }
    ) => {
    const {push} = useHistory()

    if(loading) {
        return (
            <div>
                <Flex>
                    <Loading/>
                </Flex>
            </div>

        )
    }

    if(error) {
        return <Error/>
    }

    return (
        <div>
            <ProductListStyle >
                <Container>
                    <Row  >
                        {data.map((value) => {
                            const {id} = value

                            return (
                                <Col md="4" key ={id}>
                                    <ProductListItem
                                        {...value}
                                        data-scroll
                                        render={render}
                                        id={id}
                                        cartId={cartId}
                                        backgroundColor={backgroundColor}
                                        onClick={() => push(`/our-coffee-page/${id}`)}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </ProductListStyle>
        </div>
    );
};

export default ProductList;