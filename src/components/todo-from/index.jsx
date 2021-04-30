
import React from 'react';
import proptypes from 'prop-types'
import {Form,FormGroup,Label, Input, Button} from 'reactstrap';

class CreateTodoFrom  extends React.Component {
    state = {
        text:"",
        description: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.CreateTodo(this.state);
        event.target.reset();
        this.setState({text: '', description:''});
    }
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                    placeholder="Do some code"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                 <Label>Describe task</Label>
                    <Input
                    type="textarea"
                    placeholder="write some short description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit">Create Task</Button>

            </Form>
        )
    }
}

// eslint-disable-next-line react/no-typos
CreateTodoFrom.proptypes = {
    CreateTodo: proptypes.func.isRequired

}

export default CreateTodoFrom;