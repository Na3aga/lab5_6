import { GET_PAGES, DELETE_PAGE, ADD_PAGE } from "../actions/types.js";

const initialState = {
  pages: [1, 2, 3]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PAGES:
      return {
        ...state,
        pages: action.payload
      };
    case DELETE_PAGE:
      return {
        ...state,
        pages: state.pages.filter(page => page.id !== action.payload)
      };
    case ADD_PAGE:
      return {
        ...state,
        pages: [...state.pages, action.payload]
      };
    default:
      return state;
  }
}
