const { posts } = require("../data/dummyData");

exports.deletePost = (req, res) => {
  const postId = req.params.id;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  // 🔥 Authorization Check (Ownership)
  if (post.owner !== req.user.id) {
    return res.status(403).json({
      message: "Not authorized to delete this post",
    });
  }

  res.status(200).json({
    message: "Post deleted successfully",
  });
};
