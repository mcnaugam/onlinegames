import axios from "axios";
import { ADD_GAME, GET_ERRORS, GET_GAME, SET_GAMES } from "./types";

export const addGame = (game, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/games", game);
    dispatch({
      type: ADD_GAME,
      payload: res.data,
    });
    history.push(`/preGame/${res.data._id}`);
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getGame = (gameId, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/games/${gameId}`);
    dispatch({
      type: GET_GAME,
      payload: res.data,
    });
  } catch (err) {
    history.push("/dashboard");
  }
};

export const setGames = (history) => async (dispatch) => {
  try {
    const res = await axios.get("/api/games");
    await dispatch({
      type: SET_GAMES,
      payload: res.data,
    });
  } catch (err) {
    history.push("/dashboard");
  }
};
