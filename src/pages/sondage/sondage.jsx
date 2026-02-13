import React from "react";
import "./sondage.css";
import { useNavigate } from "react-router-dom";
import sondage1 from "../../assets/pagequestionnaire/sondage1.svg"

function Sondage() {
    const navigate = useNavigate();

    const handlePageClick = () => {
        navigate("/sondage2");
    };

    return(
        <div>
            <img src={sondage1} alt="brain image"/>
            <h1 className="title-sondage">How are you <br/> feeling lately?</h1>
            <div className="buttons-sondage">
                <button onClick={handlePageClick} role="button" tabIndex={0} className="button-sondage">Calm</button>
                <button onClick={handlePageClick} role="button" tabIndex={0} className="button-sondage">Tired</button>
                <button onClick={handlePageClick} role="button" tabIndex={0} className="button-sondage">Overwhelmed</button>
                <button onClick={handlePageClick} role="button" tabIndex={0} className="button-sondage">Balanced</button>
                <button onClick={handlePageClick} role="button" tabIndex={0} className="button-sondage">Anxious</button>
            </div>
        </div>
    )
}

export default Sondage