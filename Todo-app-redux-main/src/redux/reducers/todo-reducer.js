import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState = [];
export default (state = initialState, action) => {

        switch (action.type) {

            case ADD_TODO:
            //add todo
            console.log("Adding Todos....")
            return [...state, action.payload];

            case DELETE_TODO:
            //Delete todo
            const newState = state.filter((todo) => todo.id !== action.payload);
            return newState;

            case UPDATE_TODO:
            //Update todo
            const updateState = state.map((todo) => {
                if (todo.id == action.payload.todoId) {
                todo.title = action.payload.todo.title;
                todo.description = action.payload.todo.description;
                }
                return todo;
            });
            return updateState;

            default:
            return state;
        }

  // if(action.type === ADD_TODO){
  //     //add todo
  // }else if(action.type === DELETE_TODO){
  //     // Delete Todo
  // }else if(action.type === UPDATE_TODO){
  //     // Updte Todo
  // }else{
  //     // initial State
  // }
};
