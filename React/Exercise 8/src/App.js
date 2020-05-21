import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}

  }

  inputChanged1 = (event) => {
    this.setState({description: event.target.value});
  }

  inputChanged2 = (event) => {
        this.setState({date: event.target.value});
  }
  deleteItem=(index) => {
      console.log("Deleting row: " +index)
      this.setState(filterState => ({
          todos: filterState.todos.filter((todo, i) => i !== index)
      }));
    };

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, [this.state.description, this.state.date]]
    });
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Simple Todolist</h2>
          </div>
          <div>
            <form onSubmit={this.addTodo}>
                <input type="text" onChange={this.inputChanged1} value={this.state.description}/>
                <input type="text" onChange={this.inputChanged2} value={this.state.date}/>
              <input type="submit" value="Add"/>
            </form>
          </div>
          <div>
            <ul>
                <table>
                    <tbody>
                    <tr><th>Description</th>
                        <th>Date</th>
                    </tr>
                {this.state.todos.map((item, index) =>
                        <tr>
                        <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td> <button onClick={() => {this.deleteItem(index)}}>Delete</button></td>
                        </tr>
                )}
                    </tbody>
                </table>
            </ul>
          </div>
        </div>
    );
  }
}

export default App;