
import Navigator from './snippets/Navigator'
import '../css/nav.css';
import React from "react";
function Navs(props){
    return(
        <nav className={props.className}>
            <span><button onClick={props.onClick} className='menuBTN closeMenu'>MENU</button></span>
            <Navigator className="navieffect" href='/'routeTag="Home"/>
            <Navigator className="navieffect" href='/'routeTag="Carrera Deportiva"/>
            <Navigator className="navieffect" href='/'routeTag="Sobre Mi"/>
            <Navigator className="navieffect" href='/'routeTag="Entrena Con Nosotros"/>
        </nav>
    )
}

export default Navs;