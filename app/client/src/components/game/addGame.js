import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGame } from "../../actions/gameActions";

class AddGame extends Component {
  constructor() {
    super();
    //this.addGame = this.addGame.bind(this);
    this.state = {
      auth: {},
      errors: {},
    };
  }

  //componentWillReceiveProps(nextProps) {
  //  console.log("component will receive props");
  //  this.setState({ auth: nextProps.auth });
  // if (nextProps.errors) {
  //   this.setState({
  //    errors: nextProps.errors,
  //  });
  // }
  // }

  addGame(game) {
    const { user } = this.props.auth;

    console.log("user: " + user);

    const newGame = {
      gameType: game,
      initiator: user,
      numPlayers: 2,
    };
    this.props.addGame(newGame, this.props.history);
  }

  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <button
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              onClick={() => this.addGame("boggle")}
            >
              Boggle
            </button>
          </div>
        </div>
      </div>
    );
  }
}
AddGame.propTypes = {
  addGame: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { addGame })(AddGame);
