const initialState = {
    todos: [
        {todo: '', completed: false}
    ]
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TODO':
        const newTodo = { todo: action.payload, completed: false}
        return {
          ...state,
          todos: [...state.todos, newTodo]
        };
      case 'TOGGLE_TODO':
        return{
          ...state,
          todos: state.todos.map((todo, index) => {
            if (action.payload === index) {
              return {
                ...todo,
                completed: !todo.completed
              };
            } else {
              return todo;
            }
          })
        };
      default:
        return state;
    }
  };