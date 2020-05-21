import React from 'react'; function TodoTable(props) {
    return (
        <div>
            <table>
                <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                {props.todos.map((item, index) => <tr key={index}>
                    <td>{item.date}</td><td>{item.description}</td></tr>)}
                <td>
                    /*fix functions to use props*/
                    <button onClick={() => {this.deleteItem(index)}}>Delete</button>
                </td>
                </tbody>
            </table>
        </div>
    ); } export default TodoTable;
