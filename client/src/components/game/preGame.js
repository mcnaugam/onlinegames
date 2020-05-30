import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setGames } from "../../actions/gameActions";
import { setPage } from "../../actions/pageActions";

class PreGame extends Component {
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

  // componentDidMount() {
  //   const { gameId } = this.props.match.params;
  //   //this.props.getGame(gameId, this.props.history);
  // }

  componentDidMount() {
    console.log("component mounted");
    this.props.setGames();
  }

  componentDidUpdate(nextProps) {
    console.log("component did update");
    const { gameType } = nextProps.game;

    this.props.setPage({ title: `Game lobby - ${gameType}` });
  }

  componentWillReceiveProps() {
    console.log("component will receive props");
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props");
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.game) {
      const {
        _id,
        players,
        gameType,
        numPlayers,
        initiator,
        date,
      } = nextProps.game;

      this.setState({
        _id,
        players,
        gameType,
        numPlayers,
        initiator,
        date,
      });
      this.props.setPage({ title: `Game lobby - ${gameType}` });
    }
  }

  render() {
    console.log("render");
    const players = this.props.game.players;

    if (players) {
      var listItems = players.map((player) => {
        console.log(JSON.stringify(player));
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
  setPage: PropTypes.func.isRequired,
  setGames: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.game.games);

  var game1;
  state.game.games.forEach((game) => {
    if (ownProps.match.params.gameId === game._id) {
      game1 = game;
      console.log("found game: " + JSON.stringify(game));
    }
  });

  console.log(game1);

  return {
    game: state.game.games.find(
      (game) => ownProps.match.params.gameId === game._id
    ),
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { setPage, setGames })(
  withRouter(PreGame)
);
