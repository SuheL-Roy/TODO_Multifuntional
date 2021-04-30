
import React from 'react';
import proptypes from 'prop-types';
import {Row , Col} from 'reactstrap';
import Searcpanel from './search-panel.jsx';
import FilterController from './filter-controll.jsx'
import ViewControler from './ViewControler.jsx';
import BulkController from './Bulk-controler.jsx';



const Controlers = ({term,view,changeview,clearSelected,clearCompleted,reset,handleSerach,toggleFrom, handlefilter})=> (
    <div>
        <Searcpanel
        term={term}
        handleSerach={handleSerach}
        toggleFrom={toggleFrom}
        
        />
        <Row className="my-4">
            <Col md={{ size:4 }}>
                <FilterController handlefilter={handlefilter}/>
            </Col>
            <Col md={{ size:4 }}>
            <ViewControler view={view} changeview={changeview}/>
            </Col>
            <Col md={{ size:4 }} className="d-flex">
            <div className='ml-auto'>
                <BulkController
                clearSelected={clearSelected}
                clearCompleted={clearCompleted}
                reset={reset}
                />
                </div>
            </Col>
        </Row>
    </div>

);

// eslint-disable-next-line react/no-typos
Controlers.proptypes = {
    term:proptypes.string.isRequired,
    view:proptypes.string.isRequired,
    handleSerach:proptypes.func.isRequired,
    toggleFrom:proptypes.func.isRequired,
    handlefilter:proptypes.func.isRequired,
    changeview:proptypes.func.isRequired,
    clearSelected:proptypes.func.isRequired,
    clearCompleted:proptypes.func.isRequired,
    reset:proptypes.func.isRequired
    

}
export default Controlers;


