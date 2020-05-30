import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user, isAuthenticated } = this.props.auth;

    const authenticatedNav = (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <div className="row">
              <div className="col s4"></div>
              <div className="col s4 center-align">
                <h4 style={{ color: "black" }}>Online Games</h4>
              </div>

              <div className="col s4 right-align">
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );

    const unauthenticatedNav = (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <div className="row">
              <div className="col s4"></div>
              <div className="col s4 center-align">
                <h4 style={{ color: "black" }}>Online Games</h4>
              </div>

              <div className="col s4 right-align">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>

                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );

    let headerLinks;

    if (isAuthenticated && user) {
      headerLinks = authenticatedNav;
    } else {
      headerLinks = unauthenticatedNav;
    }

    return <div>{headerLinks}</div>;
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
