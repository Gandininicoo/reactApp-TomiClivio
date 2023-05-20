import "../css/pages.css";
import backgroundImg from "../img/clivio-victoria.jpg";
import React from "react";
function SobreMiHeader() {
  return (
    <article
      className="mainBackground"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2>Mi historia.</h2>
      <p className="masInfo">Desliza y conoceme.</p>
    </article>
  );
}

function SobreMi() {
  return (
    <>
      <SobreMiHeader />
      <section id="infoSection">
        <p className="info jstfy">
          Naci en Victoria, Entre Rios en el año 1999.<br></br><br></br> A los 14 años
          empece a dar mis primeros pasos en el triathlon siguiendo el legado de
          mi papá, Victor Clivio. Tuve la suerte de que los buenos resultados me
          acompañen desde un inicio pudiendo clasificar al poco tiempo a mis
          primeros juegos suramericanos junior (Brasil 2015). <br></br><br></br> A partir
          de ahí, entrenando bajo la dirección de mi padre en “Clivio’s Team” mi
          carrera deportiva tuvo un crecimiento exponencial. Lo que me permitió
          participar de 4 juegos sudamericanos, 3 panamericanos ,2 mundiales y
          un juego suramericano de playa absoluto.<br></br><br></br> En enero de 2023 me
          consagre campeón del Triatlhon Internacional de La Paz, cumpliendo así uno
          de mis grandes objetivos como deportista.<br></br><br></br> En abril de 2023
          decidí darle un giro a mi carrera y orientarla a la media distancia
          teniendo mi primera experiencia en “Half Santa Ana 25ta edición”
          logrando el segundo puesto de la categoría Elite, lo que me dio un
          gran impulso para seguir adelante en esta distancia donde pronto me
          esperan enormes desafíos…
        </p>
      </section>
    </>
  );
}
export default SobreMi;
