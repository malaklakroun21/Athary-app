import React from "react";
import "./welcomegreen.css"
import logo from "../../assets/character-imgs/logo.svg"
import selectedgreen from "../../assets/character-imgs/selected-green-char.svg"

function Welcomegreen (){
    return(
        <div>
            <img src={logo} alt="logo picture"/>

            <h1 className="welcome"> WELCOOOM <br/> ATHAR </h1>

            <img className="greenatharpic" src={selectedgreen} alt="green picture brain" />

            <button className="begin"> LET THE JOURNEY BEGINS </button>

        </div>
    )
}

export default Welcomegreen