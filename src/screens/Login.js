import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>this is Login page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Click me to go to Home page
      </button>
    </div>
  );
};

export default Login;
