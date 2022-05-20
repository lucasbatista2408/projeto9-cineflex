import React from "react";
import styled from "styled-components"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom";
import axios from "axios"
import Footer from "./Footer"
import Session from "./Session"


export default function TimeTable(data){

  const {MovieId} = useParams();
  console.log(MovieId)
  const [time, setTime] = React.useState([])

  function axiosRequest(){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${MovieId}/showtimes`)
    promise.then(request => {
      setTime(request.data.days)
    })
  }

  React.useEffect(() => {
    axiosRequest()
  },[])

  console.log(time)

  return(
    <TimeTab>
      <Banner>
        <h1>Selecione o Horário</h1>
      </Banner>
      <div>
      {time.map((info, key) => <Session  
          id={info.id} 
          day={info.weekday} 
          date={info.date}
          showtime={info.showtimes} />)}
      </div>
      <Footer />
    </TimeTab>
  )
}

const TimeTab = styled.div`
  margin-top: 70px;
  margin-bottom: 130px;
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