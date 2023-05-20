import Header from "./components/Header";
import Navs from "./components/Navs";
import Footer from "./components/Footer";
import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarreraDeportiva from "./components/CarreraDeportiva";
import EntrenaConNostros from "./components/EntrenaConNosotros";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";



function App() {
  const [menuOn, menuOff] = useState(false)
  let hiddenMenuClass = menuOn ? "hiddenMenu hiddenMenuOn" : "hiddenMenu";

  return (
    <BrowserRouter>
      <Header onClick={()=> menuOff(!menuOn)}/>
      <Navs className={hiddenMenuClass} onClick={()=> menuOff(!menuOn)}/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/carrera-deportiva" element={<CarreraDeportiva/>} />
          <Route path="/sobre-mi" element={<SobreMi/>} />
          <Route path="/clivios-team" element={<EntrenaConNostros/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
