import React from "react";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  .notification-container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 15px 0 0;
    padding: 15px 20px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0;
    top: 80%;
    transition: transform 0.3s ease-in-out;
    display: none;
  }
  .show {
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px 10px 0 0;
    padding: 15px 20px;
    position: absolute;

    transition: transform 0.3s ease-in-out;
  }
  p {
    margin: 0;
  }
`;

function Notification({ showNotification }) {
  return (
    <NotificationWrapper>
      <div
        className={`notification-container ${showNotification ? `show` : ""}`}
      >
        {/* class change if notification is true */}
        <p>Letter already entered</p>
      </div>
    </NotificationWrapper>
  );
}

export default Notification;
