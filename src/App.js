import Header from "./components/Header";
import Home from "./components/Home";
import Navs from "./components/Navs";
import Footer from "./components/Footer";
import CarreraDeportiva from "./components/CarreraDeportiva";
import EntrenaConNostros from "./components/EntrenaConNosotros";
import React,{useState} from "react";
function App() {
  const [menuOn, menuOff] = useState(false)
  let hiddenMenuClass = menuOn ? "hiddenMenu hiddenMenuOn" : "hiddenMenu";

  return (
    <>
      <Header onClick={()=> menuOff(!menuOn)}/>
      <Navs className={hiddenMenuClass} onClick={()=> menuOff(!menuOn)}/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
