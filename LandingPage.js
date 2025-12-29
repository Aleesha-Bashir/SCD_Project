import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landingPage.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "40px",
      }}
    >
      <div className="content-box">
        <h2 className="heading-display">Welcome to Digital Bookstore 📚</h2>

        <p>Discover, read, and share your favorite books online.</p>
        <button onClick={() => navigate("/guest-home")}>Continue as Guest</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/Register")}>Create Account</button>
      </div>
    </div>
  );
}
