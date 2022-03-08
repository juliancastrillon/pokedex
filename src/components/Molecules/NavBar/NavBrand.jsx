import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/img/logo.ico'
import "./NavBar.css";

export const NavBrand = () => {
    let navigate = useNavigate();
    const handleClick=() => {
        navigate('/')
    }
    return (    
    <div className="m-navbarand" onClick={handleClick} >
        <img className="m-nabrand__logo" src={logo} alt="Logo de la aplicación"/>
        <span className="m-navbrand__text" >POKEDEX_</span>
    </div>

);
}



export default NavBrand;