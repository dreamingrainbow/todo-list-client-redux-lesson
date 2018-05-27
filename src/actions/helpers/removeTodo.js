import {
    REMOVE_TODO
} from '../constants';

export const removeTodo = (todoIndex) => {
    const todoList = JSON.parse(localStorage.getItem('TodoList'));  
    const newTodoList = todoList.filter((todo, i) => Number(todoIndex) !== i);
    localStorage.setItem('TodoList', JSON.stringify(newTodoList));
    return {
        type : REMOVE_TODO,
        payload : newTodoList
    }
}
