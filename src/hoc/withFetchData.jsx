import React, { Component } from "react";

export const withFetchData = (Component) => {
  class withFetchComponent extends Component {

    componentDidMount(){
        console.log('Hello');
    }
    

    render() {
      return <Component {...this.props}/>;
    }
  }

  return withFetchComponent;
};
