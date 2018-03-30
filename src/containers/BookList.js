import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectBook } from "../actions";
import BookList from "../components/BookList";

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
