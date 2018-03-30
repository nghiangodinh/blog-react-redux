import { connect } from "react-redux";

import BookDetail from "../components/BookDetail";

const mapStateToProps = state => {
  return {
    book: state.activeBook
  };
};

const BookDetailContainer = connect(mapStateToProps)(BookDetail);
export default BookDetailContainer;
