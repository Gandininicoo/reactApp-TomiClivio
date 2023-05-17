import Navs from "./Navs";
import '../css/header.css';
import React from "react";

function Header(props){
    return(
    <header className="header">
        <button onClick={props.onClick} className='menuBTN'>MENU</button>
        <Navs className="menu"/>
    </header>
    )
}
export default Header