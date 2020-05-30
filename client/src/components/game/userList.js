import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";

class UserList extends Component {
  //componentDidMount() {
  // this.props.getUsers();
  // }
  render() {
    const { users } = this.props.user;

    const listItems = users.map((user) => <li key={user._id}>{user.name}</li>);
    return <ul>{listItems}</ul>;
  }
}

UserList.propTypes = {
  user: PropTypes.object.isRequired,
  // getUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(UserList);
