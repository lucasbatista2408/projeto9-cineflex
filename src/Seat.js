import React from "react"
import styled from "styled-components"

export default function Seat({id, number, status}){

  const [selec, setSelec] = React.useState('')

  function handleClick(e){
    e.preventDefault();
    e.target.style.background = '#8DD7CF'
    e.target.style.border = '1px solid #8DD7CF'
    console.log(e.target);
}

  return(
      <MapN>
        {status ? 
        <button onClick={handleClick}>
            {number}
        </button> 
        : 
        <button style={{ 'background-color': "#FBE192", 'border': '1px solid #F7C52B' }} disabled>
            {number}
        </button>} 
      </MapN>
  )
}

const MapN = styled.div`

  button{
    font-family: 'Roboto';
    font-size: 12px;
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    border-radius: 50%;
    background-color: ${props => props.backg ? props.backg: '#C3CFD9'};
  }
`