import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Contact Us</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Click me to go to login page
      </button>
    </div>
  );
};

export default Contact;
