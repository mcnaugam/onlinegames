import { SET_PAGE } from "../actions/types";

const initialState = {
  page: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
}
