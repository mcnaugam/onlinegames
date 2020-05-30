import { GET_GAME, SET_GAMES, ADD_GAME } from "../actions/types";
const initialState = {
  game: {},
  games: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GAME:
      return {
        ...state,
        game: action.payload.game,
      };
    case SET_GAMES:
      let gamesCopy = action.payload.games;
      localStorage.setItem("games", JSON.stringify(gamesCopy));
      return {
        ...state,
        games: gamesCopy,
      };
    case ADD_GAME:
      let gamesCopy2 = state.games.concat(action.payload);
      localStorage.setItem("games", JSON.stringify(gamesCopy2));
      return {
        ...state,
        games: gamesCopy2,
      };
    default:
      return state;
  }
}
