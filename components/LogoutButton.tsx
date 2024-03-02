import React from "react";

const LogoutButton = () => (
  <button onClick={() => (window.location.href = "/api/auth/logout")}>
    Log Out
  </button>
);

export default LogoutButton;
