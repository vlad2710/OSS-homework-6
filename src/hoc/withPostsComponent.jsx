import React from "react";
import fetchData from "../axios/fetchData";
import { GET_POSTS_URL } from "../axios/request";

export const withPostsComponent = (Component) => {
  class PostsComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const getData = async () => {
        const result = await fetchData(GET_POSTS_URL);
        this.setState({
          data: result.data,
        });
      };

      getData();
    }

    render() {
      return <Component {...this.props} state={this.state} />;
    }
  }

  return PostsComponent;
};
