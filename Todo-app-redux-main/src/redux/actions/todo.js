import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";


// Add Todo Action
export const addTodo = (todo)=>({
    type:ADD_TODO,
    payload:todo
})

// Delete Todo Action
export const deleteTodo = (id)=>({
    type:DELETE_TODO,
    payload:id
})
// Update Todo Action
export const updateTodo = (todo,id)=>({
    type:UPDATE_TODO,
    payload:{todo:todo,todoId:id}
})