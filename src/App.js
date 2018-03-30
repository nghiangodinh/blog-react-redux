import React from "react";

import { BookListContainer, BookDetailContainer } from "./containers";

import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="d-flex flex-row">
        <BookListContainer />
        <BookDetailContainer />
      </div>
    </div>
  );
};

export default App;
