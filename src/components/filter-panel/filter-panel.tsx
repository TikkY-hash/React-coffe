import React, {FC, useCallback} from 'react';
import FilterPanelInput from "../filter-panel-input/";
import styled from "styled-components";
import {Container,Row,Col} from "reactstrap";
import FilterPanelElements from "../filter-panel-elements";
import {FilterProps} from "../../types/filter-type";

const FilterPosition = styled.div`
  margin-top: 60px;
  display: flex;
  margin-bottom: 61px;
  
  @media (max-width: 426px) {
    & {
      margin-top: 40px;
    }
  }
`

const FilterPanel : FC <FilterProps> = React.memo(({onUpdateId, id,onUpdateTerm}) => {

    const onChangeTerm = useCallback((term : string) : void => {
        onUpdateTerm(term)
    },[onUpdateTerm])

    const onChangeId = useCallback((id : number) : void => {
        onUpdateId(id)
    },[onUpdateId])

    return (
        <FilterPosition>
            <Container>
                <Row>
                    <Col md = "6">
                        <FilterPanelInput
                            onUpdateTerm={onChangeTerm}
                        />
                    </Col>
                    <Col md = "6">
                        <FilterPanelElements
                            onUpdateId = {onChangeId}
                            id = {id}/>
                    </Col>
                </Row>
            </Container>
        </FilterPosition>
    );
});

export default FilterPanel;