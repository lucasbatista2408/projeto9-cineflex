import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components"

export default function Session({id, day, date, showtime}){



  return(
    <Sess>
      <h1>{day} - {date} </h1>
      {showtime.map(clock => 
      <Link to={`/sessao/${id}`} >
        <button>
          {clock.name}
        </button>
      </Link>)}
    </Sess>
  )
}

const Sess = styled.div`
  margin-left: 16px;
  margin-bottom: 24px;

  h1 {font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: #293845;
  margin-bottom: 24px;
}

  button{
    width: 84px;
    height: 44px;
    border: none;
    background-color: orange;
    border-radius: 3px;
    margin-right: 8px;
  }
`