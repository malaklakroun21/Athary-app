import React from "react";
import { useNavigate } from "react-router-dom";
import sondage2 from "../../assets/pagequestionnaire/sondage2.svg"
import "./sondage2.css";


function Sondage2(){
    return(
        <div>
            <img src= {sondage2} alt="brain picture"/>
            <h1 className="title-sondage2">What would you <br/> like to improve first?</h1>
            <div className="buttons-sondage2">
                <button className="button-sondage2">Daily Rythm</button>
                <button className="button-sondage2">Mental Clarity</button>
                <button className="button-sondage2">Movement</button>
                <button className="button-sondage2">Focus</button>
                <button className="button-sondage2">Sleep</button>
            </div>
        </div>
    )
}

export default Sondage2