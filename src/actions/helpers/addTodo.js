import {
    ADD_TODO
} from '../constants';

export const addTodo = (newTodo) => {
    const todoList = JSON.parse(localStorage.getItem('TodoList')) || [];  
    todoList.push(newTodo);      
    localStorage.setItem('TodoList', JSON.stringify(todoList));    
    return {
        type : ADD_TODO,
        payload : todoList
    }
}