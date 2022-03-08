import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/organisms/pages/Home";
import About from './components/organisms/pages/About';
import PokemonDetails from './components/organisms/pages/PokemonDetails';
import NoteFound from "./components/organisms/pages/NoteFound";
import "./assets/css/app.css";

export const App = () => (

<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/pokemon/:id' element={<PokemonDetails />}/>
        <Route path='*' element={<NoteFound />}/>
    </Routes>
</BrowserRouter>

);

export default App;