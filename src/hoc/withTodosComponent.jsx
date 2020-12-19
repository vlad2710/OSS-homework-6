import React from "react";
import fetchData from "../axios/fetchData";
import { GET_TODOS_URL } from "../axios/request";

export const withTodosComponent = (Component) => {
  class TodosComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        btnName: "all",
      };

      this.handleClick = (name) => {
        this.setState({
          btnName: name,
        });
      };

      this.onChangeCheckbox = (id, event) => {
        let dataList = this.state.data;
        const updatedData = dataList.map((item) =>
          item.id == id ? { ...item, completed: !item.completed } : item
        );
        this.setState({
          data: updatedData,
        });
      };
    }

    componentDidMount() {
      const getData = async () => {
        const result = await fetchData(GET_TODOS_URL);
        this.setState({
          data: result.data,
        });
      };

      getData();
    }

    render() {
      return (
        <Component
          {...this.props}
          state={this.state}
          handleClick={this.handleClick}
          onChangeCheckbox={this.onChangeCheckbox}
        />
      );
    }
  }

  return TodosComponent;
};
