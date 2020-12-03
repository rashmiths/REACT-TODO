import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  getStyle = (completed) => {
    return {
      background: "#F4F4F4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };
  createTasks(item) {
    return (
      <div style={this.getStyle(item.completed)}>
        <p>
          <input
            type="checkbox"
            onChange={() => this.mark(item.key)}
            checked={item.completed ? "checked" : ""}
          />{" "}
          {item.text}
          <button
            onClick={() => this.delete(item.key)}
            key={item.key}
            style={{ float: "right" }}
          >
            <i class="fa fa-trash" aria-hidden="true">
              Delete
            </i>
          </button>
        </p>
      </div>
    );
  }
  delete(key) {
    this.props.delete(key);
  }
  mark(key) {
    this.props.markComplete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
