import React from "react";
import logo from '../imagenes/logo-FT.png';
import './logo.css';


function Logo(){

    return(
        <div className="logo-contenedor">
        <img src={logo} className="logo" alt="Logo Esteban" />
      </div>
    )
}


export default Logo;