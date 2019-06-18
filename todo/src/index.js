import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import TodoList from './components/todoList'
import './App.css'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}>
                    <TodoList />
                </Provider>
, document.getElementById('root'));