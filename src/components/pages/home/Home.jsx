import React from "react";
import  DefaultLayout  from "../../layouts/default-layout/DefaultLayout";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    
return(

<DefaultLayout title='Home'>
    <h1 className="title_initial-page" >Página Inicial</h1>
    <p className="p-initial" >En esta sección encontraras los pokemons disponibles, da clik en uno de ellos para obtener sus detalles o da click en el boton detalles del pokemon.</p>
    <Link to='/pokemon/pikachu' className="link-pokemondetails" > Detalles del pokemon</Link>
</DefaultLayout>
    
);
}
export default Home;