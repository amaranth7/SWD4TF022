import React, { useState } from 'react';
import TodoTable from './TodoTable’;

const Todolist = () => {

    //delete these
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [todos, setTodos] = useState([]);

    const inputChanged1 = (event) => {
        setDesc(event.target.value);
        //  props.todos.item.description = event.target.value;
    }
    const inputChanged2 = (event) => {
        setDate(event.target.value);
        // props.todos.item.date = event.target.value;
    }

    //make this add new todo items to the prop array
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, [desc, date]]);
    }

    return (
        <TodoTable todos={todos} />
    );
};

export default Todolist;