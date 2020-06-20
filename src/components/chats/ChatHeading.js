import React from "react";
import { FaVideo, FaUserPlus, FaEllipsisV } from "react-icons/fa";

export default function ({ name, numberOfUsers }) {
  return (
    <div className="chat-header">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="status">
          <div className="indicator"></div>
          <span>{numberOfUsers ? numberOfUsers : null}</span>
        </div>
      </div>
      <div className="options">
        <FaVideo />
        <FaUserPlus />
        <FaEllipsisV />
      </div>
    </div>
  );
}
