import React from "react";
import {useParams} from "react-router-dom"
import axios from "axios"

export default function TimeTable(){

  const {MovieId} = useParams();
  console.log(MovieId)
  const [time, setTime] = React.useState({})

  function axiosRequest(){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${MovieId}/showtimes`)
    promise.then(request => {
      setTime(request.data)
    })
  }

  React.useEffect(() => {
    axiosRequest()
  },[])

  console.log(time.title)

  return(
    <>
      <h1>{time.title}</h1>
    </>
  )
}