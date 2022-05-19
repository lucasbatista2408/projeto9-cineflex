import React from "react"
import axios from "axios"
import MovieCard from "./MovieCard"
import styled from "styled-components"

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
    <MovieL>
      <Banner>
        <h1>Selecione o Filme</h1>
      </Banner>
      <Content>
      {image.map((movies, key) => <MovieCard
        key={movies.id} 
        id={movies.id}
        title={movies.title} 
        url={movies.posterURL} 
        description={movies.description} 
        release={movies.releaseDate} />)}
      </Content>
    </MovieL>
  )
}

const MovieL = styled.div`
  overflow:scroll;
  min-width: 365px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 120px;
  height: 100vh;
`
const Banner = styled.div`
  min-width: 365px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;

  h1{
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #293845;
}
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  row-gap: 10px;
`
