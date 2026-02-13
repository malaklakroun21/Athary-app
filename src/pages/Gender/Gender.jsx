import React from "react";
import "./Gender.css"
import { useNavigate } from 'react-router-dom'
import womanImg from "../../assets/page2/woman 1.svg"
import manImg from "../../assets/page2/man (1) 1.svg"
import logo from "../../assets/1page/Logo.svg"
import { useEffect } from "react";
const  Gender = () => {
    const navigate = useNavigate();



  return (
    <div className="gender-screen">
       <img className="logo-gender" src={logo} alt="logo" />
      <p className="gnr-text-gender">WHAT IS <br/> YOUR GENDER</p>

      <div
        className="gender1-gender"
        onClick={() => navigate('/Email')}
      > <img src={womanImg} alt="female"/>
        <p className="txt-gender">Female</p>
      </div>

      <div
        className="gender2-gender"
        onClick={() => navigate('/Email')}
      >
        <img src={manImg} alt="male" /> 
        <p className="txt-gender">Male</p>
      </div>
    </div>
  )
}
export default Gender;