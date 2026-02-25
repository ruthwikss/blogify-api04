const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Root route (for browser test)
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// IMPORTANT: use process.env.PORT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});