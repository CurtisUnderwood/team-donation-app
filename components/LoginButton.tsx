import React from "react";

const LoginButton = () => (
  <button onClick={() => (window.location.href = "/api/auth/login")}>
    Log In
  </button>
);

export default LoginButton;
