import '../css/carreraDeportiva.css'
import backgroundImg from "../img/clivio-la-paz.jpg"
import React from "react";
function CarreraDeportivaHeader(){
    return(
        <article className="carreraDeportivaBackground" style={{backgroundImage: `url(${backgroundImg})`}}>
            <h2>Carrera Deportiva</h2>
        </article>
    )
}

function CarreraDeportiva(){
    return(
        <CarreraDeportivaHeader/>
    )
}
export default CarreraDeportiva