import React, { useState } from "react";
import "../styles/streakPersonal.css";

export default function StreakPersonal() {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 0, 16)); // January 16, 2023

  const streakDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const currentFlameDay = 8;   // current day = flame
  const frozenFlameDay = 16;   // frozen day = frozen flame

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year, month) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const getPrevMonthDays = (year, month) => {
    const firstDay = getFirstDayOfMonth(year, month);
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const prevMonthDays = getDaysInMonth(prevYear, prevMonth);
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--) days.push(prevMonthDays - i);
    return days;
  };

  const getNextMonthDays = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const totalCells = Math.ceil((daysInMonth + firstDay) / 7) * 7;
    const nextDays = totalCells - (daysInMonth + firstDay);
    return Array.from({ length: nextDays }, (_, i) => i + 1);
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const prevDays = getPrevMonthDays(year, month);
    const nextDays = getNextMonthDays(year, month);

    const allDays = [
      ...prevDays.map((day) => ({ day, type: "prev" })),
      ...Array.from({ length: daysInMonth }, (_, i) => ({ day: i + 1, type: "current" })),
      ...nextDays.map((day) => ({ day, type: "next" })),
    ];

    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) weeks.push(allDays.slice(i, i + 7));

    return weeks.map((week, weekIndex) => {
      const hasStreak = week.some(
        (d) => d.type === "current" && streakDays.includes(d.day)
      );

      return (
        <div className={`calendar-row ${hasStreak ? "streak-row" : ""}`} key={weekIndex}>
          {week.map((dayObj, dayIndex) => {
            let className = "";
            if (dayObj.type !== "current") className = "other-month";
            else if (dayObj.day === frozenFlameDay) className = "streak-day frozen";
            else if (dayObj.day === currentFlameDay) className = "streak-day current";
            else if (streakDays.includes(dayObj.day)) className = "streak-day";

            return (
              <span key={dayIndex} className={className}>
                {dayObj.type !== "current" ? dayObj.day : null}

                {dayObj.type === "current" && dayObj.day === currentFlameDay && (
                  <span className="day-icon flame">🔥</span>
                )}

                {dayObj.type === "current" && dayObj.day === frozenFlameDay && (
                  <span className="day-icon frozen-flame">❄️</span>
                )}

                {dayObj.type === "current" &&
                  dayObj.day !== currentFlameDay &&
                  dayObj.day !== frozenFlameDay &&
                  dayObj.day}
              </span>
            );
          })}
        </div>
      );
    });
  };

  const changeMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  return (
    <>
      <div className="streak-top">
        <div className="streak-count">
          <span className="streak-number">17</span>
          <span className="streak-label">day streak</span>
        </div>
        <div className="streak-fire-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" opacity="0.3">
            <path d="M12 23C16.4183 23 20 19.4183 20 15C20 11.5 18 8.5 16 6.5C16 9 14 11 12 11C10 11 9 9.5 9 8C9 6.5 10 5 10 5C6 7 4 11 4 15C4 19.4183 7.58172 23 12 23Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="streak-message">
        <div className="message-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff6b6b">
            <path d="M12 23C16.4183 23 20 19.4183 20 15C20 11.5 18 8.5 16 6.5C16 9 14 11 12 11C10 11 9 9.5 9 8C9 6.5 10 5 10 5C6 7 4 11 4 15C4 19.4183 7.58172 23 12 23Z"/>
          </svg>
        </div>
        <div className="message-content">
          <span>The mosaic is waiting for you to grow today</span>
          <button className="streak-extend-btn">EXTEND STREAK</button>
        </div>
      </div>

      <div className="streak-calendar">
        <div className="calendar-header">
          <button className="calendar-nav" onClick={() => changeMonth(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="calendar-month">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button className="calendar-nav" onClick={() => changeMonth(1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="calendar-grid">
          <div className="calendar-row calendar-days">
            <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
          </div>
          {renderCalendar()}
        </div>

        
      </div>
      
      
    </>
  );
}