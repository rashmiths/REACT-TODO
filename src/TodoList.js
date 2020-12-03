import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        completed: false,
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }
  markComplete(key) {
    var compList = this.state.items.map((todo) => {
      if (todo.key === key) todo.completed = !todo.completed;
      return todo;
    });
    this.setState({
      todos: compList,
    });
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1> TODO-LIST</h1>
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems
          entries={this.state.items}
          delete={this.deleteItem}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default TodoList;
