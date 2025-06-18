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
    <img src={IndvidualBook.coverimage} 
    alt={`${IndvidualBook.title}`} 
    height='300'
    width='200'
    />
    <p>{IndvidualBook.description}</p>
    <button onClick={()=>reserveBook(IndvidualBook.id)}>Reserve Book</button>
    </>
    
  )

}
export default BookDetails;