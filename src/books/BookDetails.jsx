import useQuery from "../api/useQuery";
import { useParams } from "react-router"

const BookDetails = () => {
  
  const {bookId} = useParams();
  
  const {
    data: IndvidualBook,
    loading,
    error
  } = useQuery(`/books/${bookId}`, 'singleBook')
  
  if(!IndvidualBook || loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <>
    <h2>{IndvidualBook.title}</h2>
    <h3>{IndvidualBook.author}</h3>
    <img src={IndvidualBook.coverimage[0]} 
    alt={`${IndvidualBook.title}'s cover`} />
    <p>{IndvidualBook.description}</p>
    <button onClick={()=>reserveBook(singleBook.id)}>Reserve</button>
    </>
    
  )

}
export default BookDetails;