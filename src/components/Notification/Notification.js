import React from "react";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  .notification-container {
    display: flex;
    border-radius: 0 15px 0 0;
    padding: 15px 20px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0;
    top: 110%;
    transition-duration: 300ms;
    font-size: 30px;
    text-align: center;
  }
  .show {
    background-color: rgba(0, 0, 0, 0.8);
    top: 90%;
    transition-duration: 300ms;
  }
  p {
    margin: 0;
  }
`;

function Notification({ showNotification }) {
  return (
    <NotificationWrapper>
      <div className={`notification-container ${showNotification && "show"}`}>
        <p>Letter already entered</p>
      </div>
    </NotificationWrapper>
  );
}

export default Notification;
