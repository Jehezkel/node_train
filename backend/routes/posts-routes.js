const router = require("express").Router();
const {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
  votePost,
} = require("../controllers/posts-controller");

router.get("/", getPosts);
router.get("/:postId", getPost);
router.post("/", addPost);
router.delete("/:postId", deletePost);
router.put("/:postId", updatePost);
router.post("/vote", votePost);
module.exports = router;
