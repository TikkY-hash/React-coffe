import React, {FC} from 'react';
import HeaderBlock from "../header-block";
import AboutContentBlock from "../about-content-block";
import {PageContentType} from "../../types/page-content-type";
import {ICartDataType} from "../../types/reducers-type";
import ProductList from "../product-list";
import {IRenderData} from "../../types/carts-types";
import TextBlock from "../text-block";

interface ITemplateContent extends PageContentType{
    data : ICartDataType[],
    children? : React.ReactNode
    id : number,
    loading : boolean,
    error : any
}

const TemplateMainContentBlock : FC<ITemplateContent> = React.memo((props) => {
    const {data,id,loading,error} = props

    return (
        <>
            <HeaderBlock
                {...props}
                children={null}
            />
            <AboutContentBlock
                 {...props}
                 rightBlock= {
                     <TextBlock {...props}/>
                 }
            />
                {props.children}
            <ProductList
                render={({weight,tittle,country} : IRenderData) => {
                    return (
                        <>
                            <div style={{textAlign : "end"}}>
                                <span>{tittle} {weight}kg</span>
                            </div>
                            <div style={{textAlign : "end"}}>
                                <span>{country}</span>
                            </div>
                        </>
                    )
                }}
                backgroundColor="white"
                data ={data}
                id = {id}
                loading= {loading}
                error={error}
            />
        </>
    );
});

export default TemplateMainContentBlock;