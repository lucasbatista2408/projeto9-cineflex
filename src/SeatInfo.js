import {useState , useEffect} from "react"
import styled from "styled-components"
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import Seat from "./Seat"

export default function SeatInfo(){

  const {SeatId} = useParams();
  const [chair, setChair] = useState([])
  const [footer, setFooter] = useState([])
  const [time, setTime] = useState([])
  const [day, setDay] = useState([])
  const [sNumber, setSNumber] = useState([])
  const navigate = useNavigate();

  function axiosRequest(){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${SeatId}/seats`)
    promise.then(request => {
      setChair(request.data.seats)
      setFooter(request.data.movie)
      setTime(request.data.name)
      setDay(request.data.day)
    })
  }


  const[name, setName] = useState('')
  const[cpf, setCpf] = useState('')
  const[seatNumber, setSeatNumber] = useState([])
  const title = footer.title;
  const weekday = day.weekday;


  // console.log(chair)
  // console.log(cpf)
  // console.log(name)
  // console.log(sNumber)
  // console.log(title)
  // console.log(weekday)
  // console.log(time)

  useEffect(() => {
    axiosRequest()
  },[])

  function ReserveSeat(e) {
		e.preventDefault(); 
    const send ={
        ids: seatNumber,
        name: name,
        cpf: cpf
      }

    console.log(send)

    const post = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", send)
    
    post.then((res) => {
      console.log('aqui');
      navigate("/sucesso", {state:{sNumber, cpf, name, title, weekday, time}})
    })
    post.catch((error) => {
      console.log(error)
    })

  }

  // function HandleSucess(){
  //   useNavigate('/sucesso', { state:{sNumber, cpf, name} })
  // }


  return(
    <>
    <SeatI>
      <Banner>
        <h1>Selecione o(s) Assento(s)</h1>
      </Banner>
      <Map>
        {chair.map((seat,key) => <Seat 
        sNumber ={sNumber}
        setSNumber ={setSNumber}
        setSeatNumber={setSeatNumber} 
        seatNumber={seatNumber} 
        id={seat.id} 
        number={seat.name} 
        status={seat.isAvailable} />)}
      </Map>
      <Subtitles>
        <Selecionado>
          <button disabled></button>
          <p>Selecionado</p>
        </Selecionado>
        <Available>
          <button disabled></button>
          <p>Disponivel</p>
        </Available>
        <Taken>
          <button disabled></button>
          <p>Indisponivel</p>
        </Taken>
      </Subtitles>
      <Form>
        <label htmlFor="campoNome">Nome do Comprador:</label>
        <input onChange={e => setName(e.target.value)} type="text" placeholder="Digite seu nome..." name="name"/>
        <label htmlFor="campoCPF">CPF do Comprador:</label>
        <input onChange={e => setCpf(e.target.value)} type="number" placeholder="Digite seu CPF..." name="CPF"/>
        <button type="submit" onClick={ReserveSeat}> Reservar Assento </button>
      </Form>
    </SeatI>
    <Footer>
      <WhiteBox>
        <img src={footer.posterURL} alt=''/>
      </WhiteBox>
      <TextInfo>
        <h1>{footer.title} <br/> {day.weekday} - {time}</h1>
      </TextInfo>
    </Footer>
    </>
  )
}

const SeatI = styled.div`
  margin: 70px 24px 122px 24px;
  box-sizing: border-box;
`

const Banner = styled.div`
  min-width: 365px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  h1{
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #293845;
}
`

const Map = styled.div`
  display: flex;
  flex-grow: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 200px;
`

const Subtitles = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 16px;

  button{
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
`

const Selecionado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button{
    background-color: #8DD7CF; 
    border: 1px solid #8DD7CF;
  }
  p{
    color: #4E5A65;
    font-size: 14px;
  }
`

const Available = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button{
    border: 1px solid #808F9D;
    background-color: #C3CFD9;
  }
  p{
    color: #4E5A65;
    font-size: 14px;
  }
`

const Taken = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button{
    background-color: #FBE192; 
    border: 1px solid #F7C52B;
  }
  p{
    color: #4E5A65;
    font-size: 14px;
  }

`

const Form = styled.div`
  margin-top: 40px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;

  label{
    font-size: 18px;
    color: #293845;
  }
  input{
    width: 326px;
    height: 50px;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 1px solid #D4D4D4;
    font-size: 18px;
    color: #AFAFAF;
    font-style: italic;
  }
  button{
    background-color: orange;
    border: none;
    border-radius: 4px;
    margin: 56px auto 0 auto;
    width: 210px;
    height: 38px;
    color: white;
  }
`
const Footer = styled.div`
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
`
const TextInfo = styled.div`

  h1{
      font-weight: 400;
      font-size: 24px;
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
  margin: 0 10px;

  img{
      width: 48px;
      height: 72px;
    }
`