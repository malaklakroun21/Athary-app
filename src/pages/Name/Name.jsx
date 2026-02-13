import React from "react";
import "./Name.css"

import logo from "../../assets/1page/Logo.svg"
import ph from "../../assets/Namepage/image 36.svg"
import { useNavigate } from 'react-router-dom'  
function Name() {
         
    return (

        <div className="name-screen">
 <img className="logol-name" src={logo} alt="logo" />
          <p className="titre-name">let&apos;s pick <br/> a name for you</p>
          <form className="form-name">
            <div className="full-name-name">
                <p>Full Name:</p>
                <input  className="name-in-name" type="text" required />
            </div>
             <div className="use-name-name">
                <p>Username:</p>
                <input  className="use-name-in-name" type="text" required />
            </div>
            <div className="btn-img-name">
            <img className="ph-name-name" src={ph} alt="cute image"  />
            <button  className="btn-rl-name" type="submit">Roll in</button>
            </div>
        </form>
             </div>

);
}
export default Name;