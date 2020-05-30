import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Header extends Component {
  render() {
    if (this.props.page.page) {
      const { title } = this.props.page.page;
      return <h5>{title}</h5>;
    } else {
      return <h5></h5>;
    }
  }
}
Header.propTypes = {
  page: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps)(Header);
