import React from "react"
import axios from "axios"
import MovieCard from "./MovieCard"

export default function MovieList(data){


  const [image, setImage] = React.useState([])

  function axiosRequest(){
  const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
  promise.then(request => {
    setImage(request.data)
  } )
  }
  
    React.useEffect(() => {
      axiosRequest()
    },[])
  


  return (
    <div className="MovieList">
      <div className="Banner">
        <h1>Selecione o Filme</h1>
      </div>
      <div className="Content">
      {image.map((movies, key) => <MovieCard
        key={movies.id} 
        id={movies.id}
        title={movies.title} 
        url={movies.posterURL} 
        description={movies.description} 
        release={movies.releaseDate} />)}
      </div>
    </div>
  )
}