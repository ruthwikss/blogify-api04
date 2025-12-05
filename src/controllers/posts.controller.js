// src/controllers/posts.controller.js

import Post from "../models/posts.model.js";

// ===============================
// GET ALL POSTS
// ===============================
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      success: true,
      data: {
        posts: posts,
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ===============================
// GET POST BY ID
// ===============================
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        post: post,
      },
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
