export const addTodo = newTodos => {
    return {
        type: 'ADD_TODO',
        payload: newTodos
    }
}