import React from "react";
import Login from "../components/Main/Profile/Login/Login";
import fetchData from "../axios/fetchData";
import { GET_PROFILE_URL } from "../axios/request";

export const withProfileComponent = (Component) => {
  class ProfileComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: "",
        isLogged: false,
        user: {},
        address: {},
        company: {},
      };

      this.handleInputChange = (e) => {
        const target = e.target;
        switch (target.type) {
          case "email":
            this.setState({
              email: target.value,
            });
            break;
          case "password":
            this.setState({
              password: target.value,
            });
            break;
        }
      };

      this.checkInputData = (e) => {
        e.preventDefault();
        if (this.state.email == "admin" && this.state.password == "admin") {
          localStorage.setItem("admin", "admin");
          this.setState({
            isLogged: true,
          });
        }
      };
    }

    componentDidMount() {
      if (localStorage.getItem("admin") == "admin") {
        this.setState({
          isLogged: true,
        });
      }

      const getData = async () => {
        const result = await fetchData(GET_PROFILE_URL);
        this.setState({
          user: result.data,
          address: result.data.address,
          company: result.data.company,
        });
      };

      getData();
    }

    render() {
      if (!this.state.isLogged) {
        return (
          <Login
            state={this.state}
            handleInputChange={this.handleInputChange}
            checkInputData={this.checkInputData}
          />
        );
      }

      return <Component {...this.props} state={this.state} />;
    }
  }

  return ProfileComponent;
};
