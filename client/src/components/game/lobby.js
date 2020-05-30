import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";

class Lobby extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.user;

    const listItems = users.map((user) => (
      <li className="collection-item" key={user._id}>
        {user.name}
      </li>
    ));
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12">
            <ul className="collection with-header">
              <li className="collection-header">
                <h4>Challenge player</h4>
              </li>
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Lobby.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getUsers })(Lobby);
