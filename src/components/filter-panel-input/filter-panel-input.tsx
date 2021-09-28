import React, {ChangeEvent, FC} from 'react';
import {FilterPanelInputStyle,Flex} from "../UI";


const FilterPanelInput : FC<{onUpdateTerm : (term : string) => void}> = React.memo(({onUpdateTerm}) => {
    const onUpdateFilter = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== '') {
            const inputValueArray = e.target.value.split("")

            inputValueArray[0] = inputValueArray[0].toUpperCase()

            onUpdateTerm(inputValueArray.join(""))
        }else {
            onUpdateTerm(e.target.value)
        }
    }

    return (
        <FilterPanelInputStyle>
            <Flex justifyContent={'flex-end'}>
                <div className="input__text">
                    <h3>Looking for</h3>
                </div>
                <div className="input__div">
                    <input
                        placeholder="start typing here..."
                        onChange={onUpdateFilter}
                    />
                </div>
            </Flex>
        </FilterPanelInputStyle>
    );
});

export default FilterPanelInput;