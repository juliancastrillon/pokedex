import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from './components/pages/about/About';
import PokemonDetails from './components/pages/pokemon-details/PokemonDetails';
import NoteFound from "./components/pages/not-found/NoteFound";
import "./assets/css/app.css";

const App = (props) => {
    
return(

<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/pokemon/:name' element={<PokemonDetails />}/>
        <Route path='*' element={<NoteFound />}/>
    </Routes>
</BrowserRouter>

);
}
export default App;