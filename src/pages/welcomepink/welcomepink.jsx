import React from "react";
import "./welcomepink.css"
import logo from "../../assets/character-imgs/logo.svg"
import principlechar from "../../assets/character-imgs/principlechar.svg"

function WelcomePink (){
    return(
        <div>
            <img src={logo} alt="logo picture"/>

            <h1 className="welcome"> WELCOOOME <br/> ATHAR</h1>

            <img className="atharpic" src={principlechar} alt="pink character brain"/>

            <button className="begin">LET THE JOURNEY BEGINS</button>
        </div>
    )
}

export default WelcomePink