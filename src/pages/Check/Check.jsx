import React from "react";
import "./Check.css"
import coin from "../../assets/checkpage/Coins.svg"
const tasks = [
  "Eat a fruit every breakfast",
  "Walk 10K steps per day",
  "Drink 1.5L every day",
  "Get 7–8 hours of sleep",
  "No phone for 4 hours",
];

export default function FocusMode() {
  return (
    
      <div className=" check-screen">
        {/* Header */}
      

        {/* Title */}
        <button className="focus-btn">Focus Mode</button>

        {/* Tasks */}
        <div className="tasks">
          {tasks.map((task, index) => (
            <div className="task" key={index}>
              <input type="checkbox" checked readOnly />
              <span>{task}</span>
              <span className="emoji">🧠</span>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="bottom-nav">
          <span>🍪</span>
          <span>🎯</span>
          <span>😄</span>
          <span>👥</span>
        </div>
      </div>
   
  );
}
