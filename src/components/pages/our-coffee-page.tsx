import React, {FC, useState} from 'react';
import ourCoffeePageContent from "../pages-content/our-coffee-page-content";
import FilterPanel from "../filter-panel";
import {useTypedSelector} from "../../hooks";
import {ICartDataType} from "../../types/reducers-type";
import TemplateMainContentBlock from "../template-main-content-block";

const OurCoffeePage : FC = () => {
    let {cartList,loading,error} = useTypedSelector(state => state.cartReducer)

    const [id,onUpdateButtonId] = useState<number | null>(null)
    const [term,onUpdateTerm] = useState('')

    const filter = (country : string) => cartList.filter(value => value.country === country)

    const onUpdateSearch = (data: ICartDataType[], term: string) : ICartDataType[] => {
        if(term.length === 0 ) {
            return data
        }

        return data.filter(value => value.country!.indexOf(term) > -1)
    }
    const onUpdateData = (data : ICartDataType[],id: number | null = 0) : ICartDataType[]  => {
        switch (id) {
            case 1 :
                return  filter('Brazil')
            case 2 :
                return  filter('Kenya')
            case 3 :
                return  filter('Columbia')
            default :
                return data
        }
    }

    return (
        <>
            <TemplateMainContentBlock
                {...ourCoffeePageContent}
                data={onUpdateData(onUpdateSearch(cartList,term),id)}
                id={3}
                loading={loading}
                error = {error}
            >
                <FilterPanel
                    onUpdateId={onUpdateButtonId}
                    id = {id}
                    onUpdateTerm={onUpdateTerm}
                />
            </TemplateMainContentBlock>
        </>
    );
};

export default OurCoffeePage;