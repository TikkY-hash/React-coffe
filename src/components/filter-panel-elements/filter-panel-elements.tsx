import React,{FC} from 'react';
import {ButtonGroup} from 'reactstrap'
import {ButtonsProps} from "../../types/filter-type";
import {FilterPanelElementsStyle, Flex,FilterPanelElementsButtonStyle} from "../UI";

const buttons = [
    {id : 1,tittle : 'Brazil'},
    {id : 2,tittle : 'Kenya'},
    {id : 3,tittle : 'Columbia'},
]

const FilterPanelElements : FC<ButtonsProps> = ({ onUpdateId, id : idClick }) => {
    return (
        <FilterPanelElementsStyle>
            <Flex justifyContent={'flex-start'}>
                <div className="element__text">
                    <h1>Or filter</h1>
                </div>
                <ButtonGroup>
                    {
                        buttons.map(value => {
                            const {id,tittle} = value

                            const color = id === idClick ? "#6c757d" :"white"

                            return (
                                <FilterPanelElementsButtonStyle
                                    key={id}
                                    onClick = {() => onUpdateId(id)}
                                    color = {color}
                                >
                                    {tittle}
                                </FilterPanelElementsButtonStyle>
                            )
                        })
                    }
                </ButtonGroup>
            </Flex>
        </FilterPanelElementsStyle>
    );
};

export default FilterPanelElements;