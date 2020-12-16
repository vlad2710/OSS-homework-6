import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import Todos from "./Todos/Todos";

export default class Main extends Component {
    render() {
        return (
            <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/todos" component={Todos} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        )
    }
}

