import React from "react";
import fetchData from "../axios/fetchData";
import { GET_PHOTOS_URL } from "../axios/request";

export const withHomeComponent = (Component) => {
  class HomeComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const getData = async () => {
        const result = await fetchData(GET_PHOTOS_URL, {
          params: { _limit: 50 },
        });
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

  return HomeComponent;
};
