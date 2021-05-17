import React from 'react'
import { Link } from 'react-router-dom';
import Astro from '../images/astronauts.svg';
import Logo from '../images/platziconf-logo.svg';
import "../components/styles/Origin.css";


function Origin() {
  return (
    <div className="section">
      <div className="section2">
        <img src={Logo} alt="Logo"/>
        <h1>Crea tus Badges</h1>
        <h3>El mejor manager para las coferencias.</h3>
        <Link to="/badges" className="btn btn-primary">Start Badges</Link>
      </div>
      <img src={Astro} alt="Astroner"/>
    </div>
  )
}

export default Origin;
