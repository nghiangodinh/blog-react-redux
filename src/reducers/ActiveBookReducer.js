import { BOOK_SELECTED } from "../actions";

const ActiveBookReducer = (state = null, action) => {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;
    default:
      return state;
  }
};

export default ActiveBookReducer;
