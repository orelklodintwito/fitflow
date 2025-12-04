// src/pages/Signup.jsx
import { useState } from "react";
import bgImage from "../assets/images/login_bg.png";
import "../styles/auth.css";

function Signup({ setShowSignup, setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState("");

  // BMI מחושב אוטומטית
  const bmi = weight && height ? weight / (height * height) : null;

  const handleSignup = (e) => {
    e.preventDefault();

    if (name.length < 3) return setError("Name must be at least 3 characters.");
    if (!email.includes("@")) return setError("Enter a valid email.");
    if (password.length < 4)
      return setError("Password must be at least 4 characters.");
    if (!weight || !height)
      return setError("Please enter weight & height.");

    // כאן אפשר לשמור את כל הנתונים למערכת בעתיד
    console.log({
      name,
      email,
      password,
      weight,
      height,
      bmi: bmi?.toFixed(1)
    });

    setIsLoggedIn(true);
  };

  return (
    <div className="auth-bg" style={{ "--bg-image": `url(${bgImage})` }}>
      <div className="auth-box">

        <h1>Create Your Account</h1>

        {/*  ⭐⭐ הטופס החדש — כולל BMI ⭐⭐ */}
        <form className="auth-form" onSubmit={handleSignup}>
          
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BMI INPUTS */}
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            type="number"
            placeholder="Height (m)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          {/* BMI PREVIEW */}
          {bmi && (
            <p className="bmi-preview">
              BMI: {bmi.toFixed(1)}
            </p>
          )}

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Create Account</button>
        </form>

        <p>
          Already have an account?{" "}
          <span className="auth-link" onClick={() => setShowSignup(false)}>
            Log In
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
