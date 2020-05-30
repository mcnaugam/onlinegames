import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGame } from "../../actions/gameActions";
import { setPage } from "../../actions/pageActions";

class ExistingGames extends Component {
  //set state
  constructor() {
    super();

    this.state = {
      id: "",
      numPlayers: "",
      players: "",
      gameType: "",
      initiator: "",
      date: "",
      errors: {},
    };
  }

  componentDidMount() {
    const { gameId } = this.props.match.params;
    this.props.getGame(gameId, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      _id,
      players,
      gameType,
      numPlayers,
      initiator,
      date,
    } = nextProps.game.game;

    this.setState({
      _id,
      players,
      gameType,
      numPlayers,
      initiator,
      date,
    });

    this.props.setPage({ title: `Join a game` });
  }

  render() {
    const players = this.state.players;

    if (players) {
      var listItems = players.map((player) => {
        return (
          <li key={player._id} className="collection-item avatar">
            <img src="../../img_avatar.png" alt="" className="circle" />
            <span className="title">{player.name}</span>
          </li>
        );
      });
    }
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 left-align">
            <h5>Players</h5>
            <ul className="collection">{listItems}</ul>
          </div>
        </div>
      </div>
    );
  }
}

PreGame.propTypes = {
  getGame: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    game: state.game,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { getGame, setPage })(
  withRouter(PreGame)
);
