import React, { Component } from "react";
import { connect } from "react-redux";
import { homeFetchData } from "../../../store/Home/actions";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchData("https://jsonplaceholder.typicode.com/photos");
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="home__inner">
            {this.props.data.map((item) => {
              return (
                <img
                  className="home_img"
                  key={item.id}
                  src={item.thumbnailUrl}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.home.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => {
      dispatch(homeFetchData(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
