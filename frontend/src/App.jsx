import { useEffect, useState } from 'react'
import axios from "axios";


function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios.get("/api/quotes")
    .then((response) => {
      setQuotes(response.data)
    })
    .catch((error) => {
      console.log(error);
      
    })
  })

  return (
    <>
      <h1>Full Stack</h1>
      <p>QUOTES: {quotes.length}</p>  

      {
        quotes.map((quote, index) => (
          <div key={quote.id}>
            <h3>{quote.author}</h3>
            <p>{quote.text}</p>
          </div>
        ))
      } 
    </>
  )
}

export default App
