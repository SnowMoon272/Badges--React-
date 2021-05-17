import React from 'react'
import Error from "../images/Taken-bro.svg";
import { Link } from "react-router-dom";
import "../components/styles/NotFound.css";


function NotFound() {
  return (
  <div className="Container_404">
    <div className="E404-Container">
      <h1>404</h1>
      <h2>Pagé Not Found</h2>
      <p>Parece que estas perdido...</p>
      <Link to="/origin" className="btn btn-primary">Regresar al Inicio</Link>
    </div>
    <img className="E404" src={Error} alt="Error404"/>
  </div>
  )
}

export default NotFound;
