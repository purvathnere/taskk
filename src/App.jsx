import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const getRecommendations = async () => {
    try {
      const res = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preference: input }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error fetching recommendations:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Product Recommendation (Mock Logic)</h2>

      <input
        type="text"
        placeholder="I want a phone under $500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: 8 }}
      />

      <button onClick={getRecommendations} style={{ marginTop: 10 }}>
        Get Recommendations
      </button>

      <ul style={{ marginTop: 20 }}>
        {result.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
