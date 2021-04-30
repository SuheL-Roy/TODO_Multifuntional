
import React from 'react';
import proptypes from 'prop-types'
import {ListGroup,ListGroupItem, CustomInput, Button} from 'reactstrap';

const ListItem = ({todo,toggleSelect,toggleComplete}) =>{
    return (
       <ListGroupItem className='d-flex align-items-center'>

           <CustomInput
              
              type='checkbox'
              id={todo.id}
              checked={todo.isSelect}
              onChange={() => toggleSelect(todo.id) }  
           />
           <div className='mx-3'>
               <h4>{todo.text}</h4>
               <p>{todo.time.toDateString()}</p>
           </div>
           <Button className='ml-auto' color={todo.isComplete ? 'danger': 'success'} onClick={() => toggleComplete(todo.id)} >
               {todo.isComplete ? 'Completed' : 'Running'}
           </Button>
       </ListGroupItem>
    );
};


// eslint-disable-next-line react/no-typos
ListItem.proptypes = {
    todo:proptypes.object.isRequired,
    toggleSelect:proptypes.object.isRequired,
    toggleComplete:proptypes.object.isRequired

}

const ListView = ({todos,toggleSelect,toggleComplete}) => {
    return(
        <ListGroup>
            {todos.map(todo =>(
                    <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                    />

                ))}
        </ListGroup>
    )
}

// eslint-disable-next-line react/no-typos
ListView.proptypes = {
    todos:proptypes.object.isRequired,
    toggleSelect:proptypes.object.isRequired,
    toggleComplete:proptypes.object.isRequired

}

export default ListView;