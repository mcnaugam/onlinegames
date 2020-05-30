import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import io from "socket.io-client";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    let socket = io("http://localhost");
    socket.on("news", (data) => {
      console.log(data);
      socket.emit("my other event", { my: "data" });
    });
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Play new or join an{" "}
                <span style={{ fontFamily: "monospace" }}>Online Game</span>
              </p>
            </h4>
          </div>

          <div className="col s6 center-align">
            <Link
              to="/addGame"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable green accent-3"
            >
              New game
            </Link>
          </div>

          <div className="col s6 center-align">
            <Link
              to="/existingGame"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable pink accent-3"
            >
              Existing games
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Dashboard);
