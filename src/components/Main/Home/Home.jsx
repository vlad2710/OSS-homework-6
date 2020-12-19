import React, { Component } from "react";
import "./Home.css";
import { withHomeComponent } from "../../../hoc/withHomeComponent";

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="home__inner">
            {this.props.state.data.map((item) => {
              return (
                <img
                  className="home_img"
                  src={item.thumbnailUrl}
                  alt=""
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withHomeComponent(Home)