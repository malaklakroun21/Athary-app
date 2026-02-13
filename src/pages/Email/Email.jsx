import React from "react"; 
import "./Email.css"
import logo from "../../assets/1page/Logo.svg"
import img from "../../assets/mailpage/_-removebg-preview 1.svg"
import {  BrowserRouter as Router , Routes , Route ,useNavigate } from 'react-router-dom'


function Email() {
    const navigate = useNavigate()
    const handlePageClick = () => {
        navigate('/Name');
      } 
    return ( 
        <div className="email-screen">
          <img className="logol-email" src={logo} alt="logo" />
          <p className="titre-email">Tell us <br/> about yourself</p>
          <form className="form-email">
            <div className="email-email">
                <p>E-mail:</p>
                <input  className="email-in-email" type="email" required />
            </div>
            <div className="password-email">
                <p>Password:</p>
                <input className="psw-in-email" type="password" required />
            </div>
            <div className=" conf-psw-email">
                <p> Confirm Password:</p>
                <input className="conf-psw-in-email" type="password" required />
            </div>
            <button onClick={ handlePageClick}  className="btn-email" type="submit">Next</button>
        </form>
        <img  className="img-email" src={img} alt="cute image"  />
        </div>
        );
        
     }
     export default Email;