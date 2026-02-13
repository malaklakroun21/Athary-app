import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/streak.css";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => navigate(path);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottom-nav">
      <img
        src="/Paint Palette.svg"
        alt="Brain"
        className={`nav-icon ${isActive("/brain") ? "active" : ""}`}
        onClick={() => handleNavClick("/brain")}
      />
      <img
        src="/Goal.svg"
        alt="Goal"
        className={`nav-icon ${isActive("/challenge") ? "active" : ""}`}
        onClick={() => handleNavClick("/challenge")}
      />
      <img
        src="/LOL.svg"
        alt="LOL"
        className={`nav-icon ${isActive("/profile") ? "active" : ""}`}
        onClick={() => handleNavClick("/profile")}
      />
      <img
        src="/People.svg"
        alt="People"
        className={`nav-icon ${isActive("/people") ? "active" : ""}`}
        onClick={() => handleNavClick("/people")}
      />
    </div>
  );
}