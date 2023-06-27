import Home from "./components/home/home";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/Latyout/latyout";
import Personajes from "./components/Personajes/personajes";
import Personaje from "./components/Personajes/Personaje/personaje";
import Ubicacion from "./components/Ubicaciones/Ubucacion/ubicacion";
import Ubicaciones from "./components/Ubicaciones/ubicaciones";
import Episodios from "./components/Episodios/espisodios";
import Episodio from "./components/Episodios/Episodio/episodio";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes/>} />
          <Route path="/personaje/:id" element={<Personaje/>} />
          <Route path="/ubicaciones" element={<Ubicaciones/>} />
          <Route path="/ubicacion/:id" element={<Ubicacion/>} />
          <Route path="/episodios" element={<Episodios/>} />
          <Route path="/episodio/:id" element={<Episodio/>} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
