
import React from 'react';
import proptypes from 'prop-types'
import {Button,ButtonGroup} from 'reactstrap'

const FilterController = ({handlefilter}) => (
    <ButtonGroup>
        <Button onClick={() => handlefilter('all') }>All</Button>
        <Button onClick={() => handlefilter('Running') }>Running</Button>
        <Button onClick={() => handlefilter('Completed') }>Completed</Button>

    </ButtonGroup>

);

// eslint-disable-next-line react/no-typos
FilterController.proptypes = {
    handlefilter:proptypes.func.isRequired
}
export default FilterController;