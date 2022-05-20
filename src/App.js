import React from "react"
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.js"
import MovieList from "./MovieList.js"
import TimeTable from "./TimeTable.js"
import SeatInfo from "./SeatInfo.js"
import Confirmation from "./Confirmation.js"

export default function App(){

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

  return(
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/filme/:MovieId" element={<TimeTable />} />
        <Route path="/sessao/:SeatId" element={<SeatInfo />} />
        <Route path="/sucesso" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
