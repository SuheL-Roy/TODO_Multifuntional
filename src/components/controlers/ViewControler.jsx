import React from 'react';
import proptypes from 'prop-types';

import {Label, CustomInput} from 'reactstrap';


const ViewControl = ({view,changeview}) => (
    <div className="d-flex">
        <Label for="list-view" className="mr-4">
            <CustomInput
             type='radio'
             name="view"
             value="list"
             id="list-view"
             onChange={changeview}
             className='d-inline-block'
             checked={view === 'list'}
            />
            ListView
        </Label>
        <Label for="table-view" className="mr-4">
            <CustomInput
             type='radio'
             name="view"
             value="table"
             id="table-view"
             onChange={changeview}
             className='d-inline-block'
             checked={view === 'table'}
            />
            TableView
        </Label>
    </div>
);

// eslint-disable-next-line react/no-typos
ViewControl.proptypes = {
   view: proptypes.func.isRequried,
   changeview: proptypes.func.isRequried

    
}
export default ViewControl;