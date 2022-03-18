import React from "react";
import  DefaultLayout  from "../../../layouts/default-layout/DefaultLayout";
import { Link } from "react-router-dom";

const Home = () => (

<DefaultLayout title='Home'>
    <h1>Página Inicial</h1>
    <Link to='/pokemon/pikachu'> Ver detalles de pikachu</Link>
</DefaultLayout>
    
);

export default Home;