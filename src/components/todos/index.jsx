
import React from 'react';
import shortid from 'shortid';
import ListView from '../listview/Index.jsx';
import TableView from '../tableview/index.jsx';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import CreateTodoFrom from '../todo-from/index.jsx';
import Controlers from '../controlers/index.jsx';
class Todos extends React.Component {
     state = {
         todos:[
          {
            id: 'dsfsds3fds',
            text: 'main todo text',
            description:'simple description',
            time:new Date(),
            isComplete:false,
            isSelect:false
        },
         {
            id: 'dsfsdfdsdsfs',
            text: 'main todo text',
            description:'simple description',
            time:new Date(),
            isComplete:false,
            isSelect:false
        },
        {
            id: 'dsfsdfdsdsfsjddhhd',
            text: 'new task',
            description:'simple description',
            time:new Date(),
            isComplete:false,
            isSelect:false
        }
       
    ],
    isopenTodoFrom:false,
    SerchTerm:'',
    view:'list',
    filter:'all'

     }

     toggleSelect = todoId => {
         const todos = [...this.state.todos]
         const todo = todos.find(t => t.id === todoId)
         todo.isSelect = !todo.isSelect;
         this.setState(todo)

     }
     
     toggleComplete = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isComplete = !todo.isComplete;
        this.setState(todo)

     }
    
     toggleFrom = () => {
         this.setState({
             isopenTodoFrom:!this.state.isopenTodoFrom
         })

     }
     handleSerach = value => {
         this.setState({SerchTerm: value})

     } 
     CreateTodo = todo => {
        todo.id = shortid.generate();
		todo.time = new Date();
		todo.isComplete = false;
		todo.isSelect = false;

		const todos = [todo, ...this.state.todos];
		this.setState({ todos });
		this.toggleFrom()
    
    };

    handlefilter =filter=>{
        this.setState({filter});

    }
    changeview =event=> {
        this.setState({
            view:event.target.value
        })

    }
    
    clearSelected = () =>{
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({todos});
        

    } 
    clearCompleted = () => {

        const todos = this.state.todos.filter(todo => !todo.isComplete);
        this.setState({todos});
        
        

    }
    reset =()=> {
        this.setState({
            filter:'all',
            SerchTerm:'',
            view:'list',
            isopenTodoFrom: false

        });


    };

    perfromSearch = () => {
        return this.state.todos.filter(todo => 
            todo.text.toLowerCase().includes(this.state.SerchTerm.toLowerCase()))
        
    }
    perfromfilter = todos => {
        const {filter} = this.state
        if(filter === 'Completed'){
            return todos.filter(todo=>todo.isComplete)
        }else if (filter === 'Running'){
            return todos.filter(todo => !todo.isComplete)
        }else{
            return todos
        }
    }

    getView = () => {
        let todos = this.perfromSearch();
        todos = this.perfromfilter(todos);
         return this.state.view === 'list' ? (
            <ListView
            todos={todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
            />


        ):(
            <TableView
            todos={todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
            />

        )
      }
    render(){

        return(
            <div>
                <h1 className="display-4 text-center mb-5">HunterCafe Todo</h1>
                <Controlers
                  term ={this.state.SerchTerm}
                  view={this.state.view}
                  toggleFrom={this.toggleFrom}
                  handleSerach={this.handleSerach}
                  handlefilter= {this.handlefilter}
                  changeview={this.changeview}
                  clearSelected={this.clearSelected}
                  clearCompleted={this.clearCompleted}
                  reset={this.reset}


                />
                <div>

                {this.getView()}   

                </div>
                
                <Modal
                isOpen={this.state.isopenTodoFrom}
                toggle={this.toggleFrom}
                
                >
               <ModalHeader
               toggle={this.toggleFrom}
               >
               Create New Todo item
               </ModalHeader>
               <ModalBody>
               <CreateTodoFrom CreateTodo={this.CreateTodo} />
               </ModalBody>
                </Modal>
               
               
            </div>
        )

    }
}

export default Todos;

