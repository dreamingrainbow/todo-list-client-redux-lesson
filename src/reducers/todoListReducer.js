import { GET_TODO_LIST, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

export const todoListReducer = ( todoList = [], action) => {
    switch(action.type) {        
        case GET_TODO_LIST:
            return action.payload;
        case ADD_TODO:
            return action.payload;
        case TOGGLE_TODO:
            return action.payload;
        case REMOVE_TODO:
            return action.payload;
        default:
            return todoList;
    }
};

