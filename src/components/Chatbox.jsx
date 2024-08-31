import React from 'react';
import './chatbox.css';

function Chatbox() {
  return (
    <div className="chatbox-container">
      <div className="chatbox-content">
        <p>No Active Chat</p>
        <button className="chatbox-button">Talk to a Counsellor</button>
      </div>
    </div>
  );
}

export default Chatbox;
