import { Routes, Route } from "react-router";

import Layout from "./layout/Layout.jsx";
import Account from "./layout/Account.jsx";
import BooksPage from "./books/BooksPage.jsx";
import BooksList from "./books/BooksList.jsx";
import BookDetails from "./books/BookDetails.jsx";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";
import Navbar from "./layout/Navbar.jsx";


const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
