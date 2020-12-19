import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    const { email, password } = this.props.state;
    const { handleInputChange, checkInputData } = this.props;
    return (
      <div className="login">
        <form className="login__form">
          <h2 className="login__title">Login</h2>
          <input
            className="login__input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleInputChange}
          />
          <input
            className="login__input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handleInputChange}
          />
          <button
            className="login__btn"
            type="submit"
            style={{
              width: "fit-content",
              padding: "6px 12px",
              margin: "10px auto 0",
            }}
            onClick={checkInputData}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
