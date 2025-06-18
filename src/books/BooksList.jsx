import useQuery from "../api/useQuery.js";

const BooksList = () => {
  const { 
    data: books,
    loading,
    error } = useQuery("/books", "books");


  if (!books || loading){
    return <p>Loading...</p>
  }

  return (
  <ul>
    {books.map((singleBook) => {
     
      return (
      <li key={singleBook.id}>
        <h2>{singleBook.title}</h2>
        <h4>{singleBook.author}</h4>
         <img src={singleBook.coverimage} 
             alt="Book Image" 
             height='300'
             width='200'
             />
        <p>{singleBook.description}</p>
        <p>{singleBook.available}</p>
      </li>
      )
    })}
  </ul>
  )
};

export default BooksList;
