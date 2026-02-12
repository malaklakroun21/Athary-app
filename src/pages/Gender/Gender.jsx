import React from "react";
import "./Gender.css"
import { useNavigate } from 'react-router-dom'
import womanImg from "../../assets/page2/woman 1.png"
import manImg from "../../assets/page2/man (1) 1.png"
import logo from "../../assets/1page/Logo (2).png"
import 
const  Gender = () => {
  const navigate = useNavigate()

  return (
    <div className="gender-screen">
       <img className="logo" src={logo} alt="logo" />
      <p className="gnr-text">WHAT IS <br/> YOUR GENDER</p>

      <div
        className="gender1"
        onClick={() => navigate('/Birthday')}
      > <img src={womanImg} alt="female"/>
        <p className="txt">Female</p>
      </div>

      <div
        className="gender2"
        onClick={() => navigate('/Birthday')}
      >
        <img src={manImg} alt="male" /> 
        <p className="txt">Male</p>
      </div>
    </div>
  )
}
export default Gender;