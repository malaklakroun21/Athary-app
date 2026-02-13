import React from "react";
import "./welcomegreen.css"
import logo from "../../assets/character-imgs/logo.svg"
import selectedgreen from "../../assets/character-imgs/selected-green-char.svg"
import { useNavigate } from "react-router-dom";

function Welcomegreen (){
    const navigate = useNavigate();

    const go =() =>{
        navigate("/challenge")
    }

    return(
        <div>
            <img src={logo} alt="logo picture"/>

            <h1 className="welcome"> WELCOOOME <br/> ATHAR </h1>

            <img className="greenatharpic" src={selectedgreen} alt="green picture brain" />

            <button onClick={go} role='button' tabIndex={0} className="begin"> LET THE JOURNEY BEGINS </button>

        </div>
    )
}

export default Welcomegreen