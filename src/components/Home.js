import ImgResposive from "./snippets/ImgResponsive"
import Homebikebig from "../img/home-bike-big.jpg"
import HomeMidbike from "../img/home-bike-mid.jpg"
import HomeSmlbike from "../img/home-bike-sml.jpg"
import "../css/home.css"
import VideoPlayer from "./snippets/VideoPlayer"
import VideoRunner from "../vid/runner-tomasClivio.mp4"
import RunnerImg from "../img/runner.png"
import React from "react";


function WellcomeImg(){
    return(
        <picture className='homeImage'>
            <ImgResposive media="(max-width: 480px)" srcSet= {[HomeSmlbike + ' 480w']} imgSize="480px"/>
            <ImgResposive media="(max-width: 768px)" srcSet= {[HomeMidbike + ' 768w']} imgSize=" 768px"/>
            <img src={Homebikebig} alt='Tomas Clivio compitiendo en bicicleta'/>
        </picture>
    )
}
function Wellcome(){
    return(
        <section className='home'>
            <WellcomeImg/>
            <img className='animate__animated animate__backInUp animate__delay-0s animate__slow tcImage'src='./tomas-clivio.png' alt="Tomas Clivio"/>
            <div className='animate__animated animate__backInUp animate__delay-0s animate__slower homeText'>TOMAS MATEO</div>
            <div className='animate__animated animate__backInUp animate__delay-1s animate__slow homeTextB'>CLIVIO</div>
        </section>
    )
}
function HomeVideo(){
    return(
        <section className="runnerSection">
            <a target="_blank" className="runnerImgUrl" href="https://www.aguanuestra.com.ar/runner/"><img alt="RunnerBebida" src={RunnerImg}className="runnerImg" /></a>
            <VideoPlayer Url={VideoRunner}/>
        </section>
    )
}
function Home(){
    return(
        <>
        <Wellcome/>
        <HomeVideo/>
        </>
    )
}
export default Home;