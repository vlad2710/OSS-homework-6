import React, { Component } from "react";

export default class TodoItem extends Component {

  render() {
    return (
      <div className="todos__item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={(e) => this.props.onChangeCheckbox(this.props.item.id, e)}
        />
        {this.props.item.title}
      </div>
    );
  }
}
