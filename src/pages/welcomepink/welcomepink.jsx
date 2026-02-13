import React from "react";
import "./welcomepink.css"
import logo from "../../assets/character-imgs/logo.svg"
import principlechar from "../../assets/character-imgs/principlechar.svg"
import { useNavigate } from "react-router-dom";

function WelcomePink (){
    const navigate = useNavigate();
    const go =() =>{
        navigate("/challenge")
    }

    return(
        <div>
            <img src={logo} alt="logo picture"/>

            <h1 className="welcome"> WELCOOOME <br/> ATHAR</h1>

            <img className="atharpic" src={principlechar} alt="pink character brain"/>

            <button onClick={go} role='button' tabIndex={0} className="begin">LET THE JOURNEY BEGINS</button>
        </div>
    )
}

export default WelcomePink