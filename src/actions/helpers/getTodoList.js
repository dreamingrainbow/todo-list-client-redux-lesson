import {
    GET_TODO_LIST
} from '../constants';

export const getTodoList = () => {
    return {
        type : GET_TODO_LIST,
        payload : JSON.parse(localStorage.getItem('TodoList'))
    }
}