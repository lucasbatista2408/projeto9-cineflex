import React from "react"
import styled from "styled-components"
import {useParams} from "react-router-dom"
import axios from "axios"

export default function Footer(){

  const {MovieId} = useParams();
  console.log(MovieId)
  const [time, setTime] = React.useState([])

  function axiosRequest(){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${MovieId}/showtimes`)
    promise.then(request => {
      setTime(request.data)
    })
  }

  React.useEffect(() => {
    axiosRequest()
  },[])

  return(
    <Footeer>
      <WhiteBox>
        <img src={time.posterURL} alt=''/>
      </WhiteBox>
      <h1>{time.title}</h1>
    </Footeer>
  )
}

const Footeer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  position: fixed;
  bottom: 0;
  left: 0;
  height: 118px;
  min-width: 365px;
  width: 100%;
  background-color: #C3CFD9;

  h1{
    font-size: 26px;
    color: #293845;
    word-wrap: break-word;
    padding: 0 5px;
  }
`
const WhiteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 90px;
  background-color: white;
  border-radius: 3px;
  margin: 14px 10px;

  img{
      width: 48px;
      height: 72px;
    }
`