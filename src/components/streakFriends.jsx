import React from "react";
import "../styles/streakFriends.css";

export default function StreakFriends() {
  const friends = [
    { id: 1, name: "Li_naa", streak: 13, avatar: "Athary-app\\public\\char1.svg" },
    { id: 2, name: "Emma_br", streak: 13, avatar: "Athary-app\\public\\char2.svg" },
    { id: 3, name: "Sar_qaah", streak: 8, avatar: "Athary-app/public/char3.svg" },
  ];

  return (
    <div className="friends-panel">
      <h2 className="friends-title">Friends Streak</h2>

      <div className="friends-list">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-row">
            <div className="friend-left">
              <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
              <span className="friend-name">{friend.name}</span>
            </div>
            <div className="friend-right">
              <span className="friend-streak">{friend.streak}</span>
              <span className="friend-fire">🔥</span>
            </div>
          </div>
        ))}

        <div className="friend-row invite-row">
          <div className="friend-left">
            <div className="invite-icon">+</div>
            <span className="friend-name">Invite a friend</span>
          </div>
        </div>
      </div>



    </div>
    
  );
}