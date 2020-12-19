import React, { Component } from "react";
import { withTodosComponent } from "../../../hoc/withTodosComponent";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return (
      <div className="todos">
        <div className="container">
          <div className="todos__inner">
            <div>
              <button
                onClick={(e) => this.props.handleClick(e.target.name)}
                name="all"
              >
                All
              </button>
              <button
                onClick={(e) => this.props.handleClick(e.target.name)}
                name="completed"
              >
                Completed
              </button>
              <button
                onClick={(e) => this.props.handleClick(e.target.name)}
                name="uncompleted"
              >
                Uncompleted
              </button>
            </div>
            {this.props.state.data.map((item, index) => {
              if (this.props.state.btnName == "all") {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onChangeCheckbox={this.props.onChangeCheckbox}
                  />
                );
              } else if (
                this.props.state.btnName == "completed" &&
                item.completed
              ) {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onChangeCheckbox={this.props.onChangeCheckbox}
                  />
                );
              } else if (
                this.props.state.btnName == "uncompleted" &&
                !item.completed
              ) {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onChangeCheckbox={this.props.onChangeCheckbox}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withTodosComponent(Todos);
