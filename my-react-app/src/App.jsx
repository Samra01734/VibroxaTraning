import { useState } from 'react';
import React from 'react';
import OIPIMAGE from "./OIP.jpeg";
import './App.css';

//********* Class based component */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      items: [
        { id: Date.now(), value: "Learn React JS", isDone: false },
        { id: Date.now() + 1, value: "Build a Todo App", isDone: false }
      ],
      currentItem: ''
    };
    this.addItem = this.addItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addItem(TodoValue) {
    if (TodoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: TodoValue,
        isDone: false
      };
      this.setState(prevState => ({
        items: [...prevState.items, newItem],
        newItem: ""
      }));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newItem: e.target.value });
  }

  handleToggle(id) {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    }));
  }

  handleDelete(id) {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <>
        <img src={OIPIMAGE} width="100" height="100" className='logo' alt="OIP" />
        <h1 className='App-title'>Sam** Todo App</h1>
        <div className="container">
          Add an Item..
          <br />
          <input
            type="text"
            className='input-text'
            placeholder='Enter an item...'
            value={this.state.newItem}
            onChange={this.handleInputChange}
          />
          <br />
          <button className='add-btn' onClick={() => this.addItem(this.state.newItem)}>
            Add To-do
          </button>
          <div className="list">
            <ul>
              {this.state.items.map(item => (
                <li key={item.id}>
                  <input
                    type='checkbox'
                    checked={item.isDone}
                    onChange={() => this.handleToggle(item.id)}
                  />
                  <span style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}>
                    {item.value}
                  </span>
                  <button className='btn' onClick={() => this.handleDelete(item.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;