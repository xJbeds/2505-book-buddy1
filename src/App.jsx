import { Routes, Route } from "react-router";

import Layout from "./layout/Layout";
import Account from "./layout/Account.jsx"
import BooksPage from "./books/BooksPage.jsx";
import BooksList from "./books/BooksList.jsx"
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/layout" element={<Account />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
