import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

class TodoList extends Component {
    state = {
        newTodos: " "
       };


    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
      };

    addTodo = (e) => {
        e.preventDefault()
        console.log(this.props.todos, 'this IS TODO LIST')
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ''})
    }

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index)
    }

    render() {
        return (
         <React.Fragment>
             <div className="todoList">
                 <h1>Todo List:</h1>
                 {this.props.todos.map((todo, index) => (
                 <h4 className={todo.completed ? "completed": null} onClick={e => this.toggleTodo(e, index)} key={index}>
                     {todo.todo}
                 </h4>))}
             </div>
             <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new Todo"
        />
        <button onClick={this.addTodo}>Add Todo</button>
         </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo, toggleTodo })(TodoList);