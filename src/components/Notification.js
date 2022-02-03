import React from "react";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  .notification-container {
    display: none;
  }
  .show {
    display: block;
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
