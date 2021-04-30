
import React from 'react';
import proptypes from 'prop-types'
import {Button,ButtonGroup} from 'reactstrap'

const BulkController = ({clearSelected,clearCompleted,reset}) => (
    <ButtonGroup>
        <Button color='danger' onClick={clearSelected}>Clearselected</Button>
        <Button color='danger' onClick={clearCompleted}>Clearcompleted</Button>
        <Button color='danger' onClick={reset}>Reset</Button>

    </ButtonGroup>

);

// eslint-disable-next-line react/no-typos
BulkController.proptypes = {
    clearSelected:proptypes.func.isRequired,
    clearCompleted:proptypes.func.isRequired,
    reset:proptypes.func.isRequired
}
export default BulkController;