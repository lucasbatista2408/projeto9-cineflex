import React from "react"
import styled from "styled-components"

export default function Header(){
  return(
    <Head>
      <h1>
        CINEFLEX
      </h1>
    </Head>
  )
}

const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C3CFD9;
  height: 68px;
  min-width: 365px;
  width: 100%;

  h1{
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  color: #E8833A;
  font-weight: 400;
}
`