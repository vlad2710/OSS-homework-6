import React, { Component } from "react";
import { withProfileComponent } from "../../../hoc/withProfileComponent";
import "./Profile.css";

class Profile extends Component {
  render() {
    const { user, address, company } = this.props.state;

    return (
      <div className="profile">
        <div className="container">
          <div className="profile__inner">
            <div className="profile__main">
              <h2>Main</h2>
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <p>Website: {user.website}</p>
            </div>
            <div className="profile__address">
              <h2>Address</h2>
              <p>City: {address.city}</p>
              <p>Street: {address.street}</p>
              <p>Suite: {address.suite}</p>
              <p>Zipcode: {address.zipcode}</p>
            </div>
            <div className="profile__company">
              <h2>Company</h2>
              <p>Bs: {company.bs}</p>
              <p>CatchPhrase: {company.catchPhrase}</p>
              <p>Name: {company.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withProfileComponent(Profile);
