import {
    TOGGLE_TODO
} from '../constants';

export const toggleTodo = (todoIndex) => {
    const todoList = JSON.parse(localStorage.getItem('TodoList')) || [];  
    todoList[todoIndex].completed = Date.now();
    localStorage.setItem('TodoList', JSON.stringify(todoList));
    return {
        type : TOGGLE_TODO,
        payload : todoList
    }
}
