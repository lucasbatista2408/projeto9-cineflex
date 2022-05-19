import axios from "axios"
import React from "react"
import TimeTable from "./TimeTable"
import {Link} from "react-router-dom";
import styled from "styled-components"

export default function MovieCard({id, title, url, description, release}){
  
  const [page, setPage] = React.useState(false)

  return(
    <>
      <Link to={`/filme/${id}`} >
        <MovieC>
          <img onClick={() => {setPage(true)} } src={url} alt="poster"></img>
        </MovieC>
      </Link>
    </>
  )
}

const MovieC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 210px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  img{
  width: 130px;
  height: 194px;
  }
`