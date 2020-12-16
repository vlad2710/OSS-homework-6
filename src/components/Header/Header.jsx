import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="nav">
            <ul className="menu">
              <li className="menu__item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu__item">
                <Link to="/todos">Todos</Link>
              </li>
              <li className="menu__item">
                <Link to="/posts">Posts</Link>
              </li>
              <li className="menu__item">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
