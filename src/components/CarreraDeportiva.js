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
        <>
        <CarreraDeportivaHeader/>
        <section id="infoSection">
        <h3>Campeonatos Nacionales</h3>
            <ul>
            <li>4x Campeon Argentina</li>
            <li>7x Campeon Entre Rios</li>
            <br></br>
            <li>1° Triathlon Internacion de la Paz 2023</li>
            <li>2° Triathlon Internacion de la Paz 2022</li>
            <li>3° Triathlon Internacion de la Paz 2019</li>
            <li>2° Sub Campeón Sudamericano U23 -Uruguay Montevideo 2019</li>
            <li>12° Juegos Sudamericanos de Playa Absolutos -Argentina,Rosario 2019</li>
            <br></br>
            <li>43° Mundial Junior -Australia, Gold Coast 2018</li>
            <li>46° Copa Europea -Hungría 2018</li>
            <li>3° Triathlon Internacion de la Paz 2018</li>
            <li>9° Panamericano Junior -Brasil, Brasilia 2018</li>
            <li>8° Sudamericano Junior -Uruguay, Montevideo 2018</li>
            <br></br>
            <li>24° Panamericano Junior -Canadá, Magog 2017</li>
            <li>6° Sudamericano Junior -Uruguay, Montevideo 2017</li>
            <br></br>
            <li>39° Mundial Junior -México, Cozumel 2016</li>
            <li>14° Panamericano Junior -Estados Unidos, West des moines 2016</li>
            <li>11° Sudamericano Junior -Argentina, La Paz 2016</li>
            <br></br>
            <li>28° Sudamericano Junior -Brasil, Joao Pessoa 2015</li>
        </ul>
        </section>
        </>
    )
}
export default CarreraDeportiva