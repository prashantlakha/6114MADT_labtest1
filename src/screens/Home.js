import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is HOME PAGE</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Click me to go to login page
      </button>

      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Click me to go to Contact page
      </button>
    </div>
  );
};

export default Home;
