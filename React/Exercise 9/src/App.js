import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';

class App extends Component {
  constructor(props) {
    super(props);
    //turn this from state to a prop
    this.state = {description: '', date: '', todos: []}

  }

  inputChanged1 = (event) => {
    this.setState({description: event.target.value});
      //  props.todos.item.description = event.target.value;
  }

  inputChanged2 = (event) => {
        this.setState({date: event.target.value});
      // props.todos.item.date = event.target.value;
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
              <td> <button onClick={() => {this.deleteItem(index)}}>Delete</button></td>
          </tr>
            )}
        </tbody>
        </table>
          </div>
        </div>
    );
  }
}

export default App;