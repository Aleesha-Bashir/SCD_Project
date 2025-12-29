import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(), // remove spaces
          password: password
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);

      // Success message
      alert("Login successful!");

      // Navigate to user homepage
      navigate("/user-home");
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landing1.jpg'})`,
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
        <h2>Login</h2>
        <p>Welcome back! Please Login to your Account</p>

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️‍🗨️" : "🙈"}
          </span>
        </div>

        <button onClick={handleLogin}>Login</button>

        <p style={{ marginTop: "10px" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "orange", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
