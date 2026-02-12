const express = require("express");
const { deletePost } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.delete("/:id", protect, deletePost);

module.exports = router;
