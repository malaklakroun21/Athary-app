import React from "react";
import { useNavigate } from "react-router-dom";
import "./questionnaire.css";
import firstpic from "../../assets/pagequestionnaire/firstpic.svg";
import secondpic from "../../assets/pagequestionnaire/secondpic.svg";
import lastpic from "../../assets/pagequestionnaire/lastpic.svg";

function Questionnaire() {
  const navigate = useNavigate();

  const handlePageClick = () => {
    navigate("/sondage");
  };

  return (
    <div onClick={handlePageClick} role="button" tabIndex={0}>
      <h1 className="title-questionnaire">
        Transform small <br /> steps into a journey <br /> you love!
      </h1>
      <div className="first">
        <img src={firstpic} alt="brain pic" />
        <p className="p1">
          Does following a healthy <br /> routine ever feel, like a <br /> slog to you ?
        </p>
      </div>
      <div className="second">
        <img src={secondpic} alt="brain picture" />
        <p className="p1">
          We believe, it&apos;s as <br /> engaging as playing
        </p>
      </div>
      <div className="last">
        <img src={lastpic} alt="brain pic" />
        <p className="p1">
          Here, every step or action <br /> earns you levels and <br /> healthy rewards
        </p>
      </div>
    </div>
  );
}

export default Questionnaire;
