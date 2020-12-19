import React, { Component } from "react";
import { withPostsComponent } from "../../../hoc/withPostsComponent";
import "./Posts.css";

class Posts extends Component {
  render() {
    return (
      <div className="posts">
        <div className="container">
          <div className="posts__inner">
            {this.props.state.data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div className="posts__item">
                    <p>Id: {item.id}</p>
                    <p>userId: {item.userId}</p>
                    <p>title: {item.title}</p>
                    <p>body: {item.body}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withPostsComponent(Posts);
