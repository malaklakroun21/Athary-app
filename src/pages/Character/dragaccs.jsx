import React from "react";
import "./dragaccs.css"
import { useNavigate } from "react-router-dom";
import logo from "../../assets/character-imgs/logo.svg"
import yellowglasses from "../../assets/character-imgs/yellowglasses.svg"
import blueglasses from "../../assets/character-imgs/blueglasses.svg"
import cap from "../../assets/character-imgs/cap.svg"
import flecheR from "../../assets/character-imgs/flecheR.svg"
import state1 from "../../assets/character-imgs/state1.svg"
import state2 from "../../assets/character-imgs/state2.svg"
import state3 from "../../assets/character-imgs/state3.svg"
import state4 from "../../assets/character-imgs/state4.svg"
import principlechar from "../../assets/character-imgs/principlechar.svg"
import green from "../../assets/character-imgs/green.svg"
import blue from "../../assets/character-imgs/blue.svg"
import yellow from "../../assets/character-imgs/yellow.svg"
import purple from "../../assets/character-imgs/purple.svg"
import selectedchar from "../../assets/character-imgs/selectedchar.svg"


function Dragaccs(){
    const navigate = useNavigate();

    const handlePageClick = () => {
        navigate("/greenchar");
    };

    const handleBack = () => {
        navigate("/Character");
    };

    const go =() =>{
        navigate("/welcomepink")
    }

    return(

        <div>
            <img src={logo} alt="logo pic"/>
            
            <h1 className="title-char"> Customize your character </h1>

            <div className="acc-nav-char">
                <div className="acc-bar">
                   <h2>Accessory</h2>
                </div>
                <div className="imgs-bar">
                    <img className="fleche-back" onClick={handleBack} role="button" tabIndex={0} src={flecheR} alt="fleche de retour image"/>
                   <img src={cap} alt="cap image"/>                   
                   <img src={yellowglasses} alt="yellow glasses image"/>
                   <img src={blueglasses} alt="blue glasses image"/>                   
                </div>
            </div>

            <div className="states-images-char">
                <img className="img-state-char" src={state1} alt="state picture"/>
                <img className="img-state-char" src={state2} alt="state picture"/>
                <img className="img-state-char" src={state3} alt="state picture"/>
                <img className="img-state-char" src={state4} alt="state picture"/>
            </div>

            <img width="300px" height="auto" className="principal-char-img" src={principlechar} alt="char img"/>

            <div className="chose-char">
                <img onClick={handlePageClick} role="button" tabIndex={0} className="char-color" src={green} alt="green character" />
                <img className="char-color" src={blue} alt="blue character" />
                <img className="char-color" src={yellow} alt="yellow character" />
                <img className="char-color" src={purple} alt="purple character" />
                <img className="char-color" src={selectedchar} alt="selected character" />
            </div>

            <button onClick={go} role="button" tabIndex={0} className="button-char">Let's go</button>
            
        </div>
    )
}

export default Dragaccs
