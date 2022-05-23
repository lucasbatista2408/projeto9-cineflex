import styled from "styled-components"
import { useLocation, useNavigate, Link } from 'react-router-dom'


export default function Confirmation(){

  const location = useLocation()
  const { sNumber, cpf, name, title, weekday, time } = location.state
  console.log(sNumber)
  console.log(title)

  let navigate = useNavigate()

  function BackHome(e){
    navigate("/")
  }

  return(
    <Confirm>
      <Banner>
        <h1>Pedido feito <br/> com sucesso!</h1>
      </Banner>
      <MovieTime>
        <h1>Filme e sessão</h1>
        <h2>{title}</h2>
        <h2>{weekday} - {time}</h2>
      </MovieTime>
      <Tickets>
        <h1>Ingressos</h1>
        {sNumber.map( (seat,key) => <p> Assento {seat}</p>)}
      </Tickets>
      <Information>
        <h1>Comprador:</h1>
        <h2>Nome: {name}</h2>
        <h2>CPF: {cpf}</h2>
      </Information>
      <Button> 
        <button onClick={BackHome}>Voltar pra Home</button>
      </Button>
    </Confirm>
  )
}

const Confirm = styled.div`
  margin: 72px 24px 122px 24px;
  box-sizing: border-box;

`

const Banner = styled.div`
  min-width: 365px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  text-align: center;

  h1{
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #247A6B;
}
`

const MovieTime = styled.div`
  font-family: 'Roboto';
  margin-top: 16px;
  margin-bottom: 40px;
  color: #293845;
  h1{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h2{
    font-size: 22px;
  }
`

const Tickets = styled.div`
  font-family: 'Roboto';
  margin-bottom: 40px;
  color: #293845;
  h1{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p{
    font-size: 22px;
    font-weight: 400;
  }

`

const Information = styled.div`
  font-family: 'Roboto';
  margin-bottom: 40px;
  color: #293845;

  h1{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h2{
    font-size: 22px;
  }

`

const Button = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  button{
    background-color: #E8833A;
    border: none;
    border-radius: 4px;
    margin: 56px auto 0 auto;
    width: 210px;
    height: 38px;
    color: white;
  }
`