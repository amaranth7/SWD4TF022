import React, { useState } from 'react';

const Todolist = () => {
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [todos, setTodos] = useState([]);

    const inputChanged1 = (event) => {
        setDesc(event.target.value);
    }
    const inputChanged2 = (event) => {
        setDate(event.target.value);
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, [desc, date]]);
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                Description: <input type="text" onChange={inputChanged1} value={desc}/>
                Date: <input type="text" onChange={inputChanged2} value={date}/>
                <input type="submit" value="Add"/>
            </form>
            <table>
                <tbody>
                <tr><th>Description</th>
                    <th>Date</th>
                </tr>
                {todos.map(todo =>
                    <tr><td>{todo}</td>
                        <td>{date}</td></tr>)}

                </tbody>
            </table>
        </div>
    );
};

export default Todolist;