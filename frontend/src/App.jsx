// src/App.jsx
import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateChallenge from "./pages/CreateChallenge.jsx";
import FoodSearch from "./pages/FoodSearch.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UpdateData from "./pages/UpdateData.jsx"; // ⭐ חדש

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("home");
  const [showSignup, setShowSignup] = useState(false);

  // לפני כניסה למערכת
  if (!isLoggedIn) {
    return showSignup ? (
      <Signup setShowSignup={setShowSignup} setIsLoggedIn={setIsLoggedIn} />
    ) : (
      <Login setShowSignup={setShowSignup} setIsLoggedIn={setIsLoggedIn} />
    );
  }

  // אחרי התחברות
  return (
    <div className="app-container">
      <Header page={page} setPage={setPage} />

      <main className="main-content">
        {page === "home" && <HomePage />}
        {page === "challenge" && <CreateChallenge />}
        {page === "food" && <FoodSearch />}
        {page === "update" && <UpdateData />} {/* ⭐ חדש */}
      </main>
    </div>
  );
}

export default App;
