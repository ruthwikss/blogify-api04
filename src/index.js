const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

// Root route
app.get("/", (req, res) => {
  res.send("Hello World - Blogify API is running");
});

// Dummy posts
const posts = [
  { id: 1, title: "First Post", content: "Hello" },
  { id: 2, title: "Second Post", content: "World" }
];

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// IMPORTANT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log(`Server is running on port ${PORT}`);
  console.log(`Local URL: http://localhost:${PORT}`);
  console.log("=================================");
});