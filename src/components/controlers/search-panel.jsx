import React from 'react';
import proptypes from 'prop-types'
import {Input,Button} from 'reactstrap';

const Searcpanel = ({term,handleSerach,toggleFrom}) => (
   <div className="d-flex">
    <Input
    placeholder="Enter your Search term"
    className="mr-3"
    value={term}
    onChange={e=> handleSerach(e.target.value)}
    />
    <Button color="success" onClick={toggleFrom}>
        New
    </Button>
   </div>

);
// eslint-disable-next-line react/no-typos
Searcpanel.proptypes = {
    term:proptypes.func.isRequired,
    handleSerach:proptypes.func.isRequired,
    toggleFrom:proptypes.func.isRequired,
    

}

export default Searcpanel;