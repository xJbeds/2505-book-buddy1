import useQuery from "../api/useQuery.js";
import useMutation from "../api/useMutation.js";
import { Link } from 'react-router'

const BooksList = () => {
  const { 
    data: books,
    loading,
    error } = useQuery("/books", "books");

    const { mutate } = useMutation('POST', "/reservations", ["books"])

  if (!books || loading){
    return <p>Loading...</p>
  }
const reserveBook = async (id) => {
  const response = await mutate({bookId:id})
  console.log(response)

}

  return (
  <ul>
    {books.map((singleBook) => {
     
      return (
      <li key={singleBook.id}>
        <a style={{fontSize: "2rem"}} 
        href={`/books/${singleBook.id}`}>
        {singleBook.title}</a>
        <h4>{singleBook.author}</h4>
         <img src={singleBook.coverimage} 
             alt="Book Image" 
             height='300'
             width='200'
             />
        <p>{singleBook.description}</p>
        <p>{singleBook.available}</p>
        <button onClick={()=>reserveBook(singleBook.id)}>Reserve</button>
      </li>
      )
    })}
  </ul>
  )
};

export default BooksList;
