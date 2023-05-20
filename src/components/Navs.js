import Navigator from "./snippets/Navigator";
import "../css/nav.css";
import React from "react";

function Navs(props) {
  return (
    <>
      <nav className={props.className}>
        <span>
          <button onClick={props.onClick} className="menuBTN closeMenu">
            MENU
          </button>
        </span>
        <Navigator onClick={props.onClick} className="navieffect" href="/" routeTag="Home" />
        <Navigator onClick={props.onClick} className="navieffect" href="/carrera-deportiva" routeTag="Carrera Deportiva"/>
        <Navigator onClick={props.onClick} className="navieffect" href="/sobre-mi" routeTag="Sobre Mi"/>
        <Navigator onClick={props.onClick} className="navieffect" href="/clivios-team" routeTag="Entrena Con Nosotros" />
      </nav>
    </>
  );
}

export default Navs;
