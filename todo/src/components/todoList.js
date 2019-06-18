import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoList extends Component {
    state = {
        newTodos: " "
       };


    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addTodo = (e) => {
        e.preventDefault()
        console.log(this.props.todos, 'this IS TODO LIST')
        this.props.addTodo(this.state.newTodos)
    }

    render() {
        return (
        <div> 
            {this.props.todos.map(() => (
                <div className="item">
                {this.props.todos}
                </div>
            ))}
        <input
          type="text"
          name="newTodos"
          value={this.state.newTodos}
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>Update todos</button>
      </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo })(TodoList);