export const addTodo = newTodos => {
    return {
        type: 'ADD_TODO',
        payload: newTodos
    }
}

export const toggleTodo = index => {
    return {
      type: 'TOGGLE_TODO',
      payload: index
    };
  };