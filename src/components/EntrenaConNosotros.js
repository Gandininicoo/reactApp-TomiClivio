import React from "react";
import GoogleFormInscripcion from "./snippets/GoogleFormInscripcion";
import backgroundImg from "../img/victor-tomas-clivio.jpg"
import NavBtn from "./snippets/NavBtn";
import clivioTeamImg from "../img/clivio-team.png"
import '../css/pages.css'
function EntrenaConNostros(){
    return(
    <>
        <article className="mainBackground" style={{backgroundImage: `url(${backgroundImg})`}}>
            <h2>Entrena con Nosotros</h2>
            <p> Sumate a Clivio team y lleva tu entrenamiento al proximo nivel.</p>
            <p className="masInfo">Desliza para mas info</p>
        </article>
        <section id="infoSection">
        <img src={clivioTeamImg} alt="Clivio Team Logo"/>
        <p className='info'>En Clivio Team te ofrecemos entrenamiento presonalizado a distancia basado en tus objetivos y con seguimiento via Whatsapp. Si estas interesado en sumarte y entrenar con nosotros podes inscribirte en el formulario a continuacion y nos pondremos en contacto.</p>
            <GoogleFormInscripcion/>
        </section>
    </>
    )
}

export default EntrenaConNostros