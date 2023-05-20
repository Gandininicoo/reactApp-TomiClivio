import '../css/pages.css'
import backgroundImg from "../img/clivio-la-paz.jpg"
import React from "react";
function CarreraDeportivaHeader(){
    return(
        <article className="mainBackground" style={{backgroundImage: `url(${backgroundImg})`}}>
            <h2>Carrera Deportiva</h2>
            <p className="masInfo">Desliza</p>
        </article>
    )
}

function CarreraDeportiva(){
    return(
        <CarreraDeportivaHeader/>
    )
}
export default CarreraDeportiva