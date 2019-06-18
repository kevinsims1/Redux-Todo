const initialState = {
    todos: []
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todo: [...state.todos, action.payload]
        };
      default:
        return state;
    }
  };