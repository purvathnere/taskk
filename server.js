import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "iPhone 12", price: 480, category: "phone" },
  { id: 2, name: "Samsung Galaxy S21", price: 450, category: "phone" },
  { id: 3, name: "OnePlus Nord", price: 380, category: "phone" },
  { id: 4, name: "MacBook Air M1", price: 900, category: "laptop" },
];

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// POST endpoint for recommendations
app.post("/recommend", (req, res) => {
  const input = req.body.preference.toLowerCase();
  let filtered = products;

  // Mock AI logic
  if (input.includes("phone")) {
    filtered = filtered.filter(p => p.category === "phone");
  }
  if (input.includes("500")) {
    filtered = filtered.filter(p => p.price <= 500);
  }

  res.json(filtered); // send recommended products
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
