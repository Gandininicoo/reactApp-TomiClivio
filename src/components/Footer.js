import NavBtn from "./snippets/NavBtn"
import "../css/footer.css"
import fblogo from "../img/fb.png"
import iglogo from "../img/ig.png"
import React from "react";
function Footer(){
    return(
        <footer className="footer">
            <a href="mailto:tomasmateoclivio@gmail.com">tomasmateoclivio@gmail.com</a>
            <section>
                <NavBtn backgroundImage={fblogo} target="_blank" className='fa' href="https://www.facebook.com/tomii.clivio"/>
                <NavBtn backgroundImage={iglogo}  target="_blank" className='fa' href="https://www.instagram.com/tomiiclivio/"/>
            </section>
            <br></br>
            <a href="https://www.linkedin.com/in/nicolas-gandini-lopez-996236244/" target="_blank">Developed by NGL</a>
        </footer>
    )
}
export default Footer