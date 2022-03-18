import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/organisms/pages/home/Home";
import About from './components/organisms/pages/about/About';
import PokemonDetails from './components/organisms/pages/pokemon-details/PokemonDetails';
import NoteFound from "./components/organisms/pages/not-found/NoteFound";
import "./assets/css/app.css";

const App = () => (

<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/pokemon/:name' element={<PokemonDetails />}/>
        <Route path='*' element={<NoteFound />}/>
    </Routes>
</BrowserRouter>

);

export default App;