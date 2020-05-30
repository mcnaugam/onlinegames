import { SET_PAGE, GET_ERRORS } from "./types";

export const setPage = (page2) => async (dispatch) => {
  try {
    console.log("dispatching page: " + JSON.stringify(page2));
    dispatch({
      type: SET_PAGE,
      payload: page2,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
