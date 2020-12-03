import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
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
        <TodoItems />
      </div>
    );
  }
}

export default TodoList;
