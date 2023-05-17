import React from "react";
import GoogleFormInscripcion from "./snippets/GoogleFormInscripcion";
import backgroundImg from "../img/victor-tomas-clivio.jpg"
import NavBtn from "./snippets/NavBtn";

function EntrenaConNostros(){
    return(
    <>
        <article className="carreraDeportivaBackground" style={{backgroundImage: `url(${backgroundImg})`}}>
            <h2>Entrena con Nosotros</h2>
            <p> Sumate a Clivio team y lleva tu entrenamiento al proximo nivel.</p>
            <NavBtn href="#trainSection" className="masInfo" routeTag="Mas informacion"/>
        </article>
        <section id="trainSection">
            
        </section>
    </>
    )
}

export default EntrenaConNostros