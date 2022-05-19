import axios from "axios"
import React from "react"
import TimeTable from "./TimeTable"
import {Link} from "react-router-dom";

export default function MovieCard({id, title, url, description, release}){
  
  const [page, setPage] = React.useState(false)

  return(
    <>
      <Link to={`/filme/${id}`} >
        <div className="MovieCard">
          <img onClick={() => {setPage(true)} } src={url} alt="poster"></img>
        </div>
      </Link>
    </>
  )
}