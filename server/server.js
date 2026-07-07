const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./src/routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to PriceWise API 🚀",
  });
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const searchRoutes = require("./src/routes/searchRoutes");
app.use("/api/search", searchRoutes);


const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);