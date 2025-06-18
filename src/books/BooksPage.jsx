import { useAuth } from "../auth/AuthContext.jsx"
import BooksList from "./BooksList.jsx";


const BooksPage = () => {
  const { token } = useAuth();

  return (
    <>
      <h1>Catalog</h1>
      <BooksList />
      { token ? <BookReservation /> : null}
    </>
  );
};

export default BooksPage;
