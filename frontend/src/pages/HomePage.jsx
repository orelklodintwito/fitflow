// src/pages/HomePage.jsx
import { useState } from "react";
import Card from "../components/Card.jsx";

function HomePage() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(1.7);
  const [bmi, setBmi] = useState(null);

  const handleBMI = () => {
    const result = weight / (height * height);
    setBmi(result.toFixed(1));
  };

  const favorites = [
    { id: 1, name: "Oatmeal", calories: 150 },
    { id: 2, name: "Chicken", calories: 165 },
    { id: 3, name: "Greek Yogurt", calories: 100 },
  ];

  return (
    <div>
      <h1>Welcome to FitFlow</h1>

      <Card title="BMI Calculator" description="Enter your height & weight">
        <div>
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <label>Height (m)</label>
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          <button onClick={handleBMI}>Calculate</button>
        </div>
        {bmi && <p>Your BMI: {bmi}</p>}
      </Card>

      <Card title="Favorites" description="Rendered with .map()">
        <ul>
          {favorites.map((f) => (
            <li key={f.id}>
              {f.name} — {f.calories} kcal
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default HomePage;
