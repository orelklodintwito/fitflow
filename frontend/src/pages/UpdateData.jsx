// src/pages/UpdateData.jsx
import { useState, useEffect } from "react";

function UpdateData() {
  // טוען נתונים קיימים מה-localStorage (אם יש)
  const savedWeight = localStorage.getItem("weight") || "";
  const savedHeight = localStorage.getItem("height") || "";

  const [weight, setWeight] = useState(savedWeight);
  const [height, setHeight] = useState(savedHeight);

  // חישוב BMI
  const bmi = weight && height ? weight / (height * height) : null;

  // שמירת הנתונים בלחיצה על Save
  const handleSave = () => {
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    alert("Details saved successfully!");
  };

  return (
    <div className="update-container">
      <h1>Update Your Details</h1>

      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (kg)"
      />

      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (m)"
      />

      <p>BMI: {bmi ? bmi.toFixed(1) : "-"}</p>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default UpdateData;
