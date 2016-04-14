import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_users } from "../actions/index";

class UserList extends Component {

  componentWillMount() {
    this.props.fetch_users();
  }

  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Dallas Cowboys</p>
        <a className="btn btn-primary">Email</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, { fetch_users })(UserList);
