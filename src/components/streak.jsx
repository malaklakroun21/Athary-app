import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/streak.css";
import StreakPersonal from "./streakPersonal";
import StreakFriends from "./streakFriends";
import BottomNav from "./bottomNav";

export default function StreakPage() {
  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();

  return (
    <div className="streak-page">
      <div className="streak-container">
        <h1 className="streak-title">Streak</h1>

        <div className="streak-header">
          <span
            className={`tab ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            PERSONAL
          </span>
          <span
            className={`tab ${activeTab === "friends" ? "active" : ""}`}
            onClick={() => setActiveTab("friends")}
          >
            FRIENDS
          </span>
        </div>

        <div className="streak-main">
          {activeTab === "personal" ? <StreakPersonal /> : <StreakFriends />}
        </div>
      </div>

      {/* Bottom Navigation */}
       <BottomNav />
      
 
    </div>
  );
}
