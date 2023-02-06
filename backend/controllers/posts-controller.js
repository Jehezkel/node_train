const pool = require("../database/db");
//TODO add return values from create/update

const getPosts = async (req, res) => {
  try {
    const query = `SELECT p.*, 
    COALESCE(vc.upvotes_cnt,0)::int upvotes_cnt, 
    COALESCE(vc.downvotes_cnt,0)::int downvotes_cnt,
    COALESCE(   
        (SELECT COUNT(1) FROM comments where post_id=p.post_id),0)::int comments_cnt,
    COALESCE(
        (SELECT (upvote::int+downvote::int*-1) from votes where post_id = p.post_id ),0
    ) user_vote
    FROM posts p
    LEFT JOIN (
        SELECT post_id,  
        SUM(upvote::int) upvotes_cnt,  
        SUM(downvote::int) downvotes_cnt
        FROM votes GROUP BY post_id ) vc ON p.post_id=vc.post_id
    `;
    const allPosts = await pool.query(query);

    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await pool.query("SELECT * FROM posts where id=$1", [postId]);
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
};

const addPost = async (req, res) => {
  try {
    const post = await pool.query(
      "INSERT INTO posts (title, body) VALUES ($1, $2) RETURNING post_id",
      [req.body.title, req.body.body]
    );
    const inserted_id = post.rows[0].post_id;
    res.json({ msg: "Inserted successfully", post_id: inserted_id });
  } catch (err) {
    console.error(err.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const title = req.body.title;
    const body = req.body.body;
    const postId = req.params.postId;
    const post = await pool.query(
      "UPDATE posts (title, body) SET ($1, $2) WHERE id=$3",
      [title, body, postId]
    );

    res.json({ msg: "Updated successfully" });
  } catch (err) {
    console.error(err.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    console.log("Received postId ", postId);
    await pool.query("DELETE FROM posts where id=$1", [postId]);
    res.json("Deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
};

const votePost = async (req, res) => {
  try {
    const postId = req.body.post_id;
    const checkResult = await pool.query(
      "SELECT post_id FROM posts where post_id=$1",
      [postId]
    );
    if (checkResult.rowCount == 0) {
      res.status(404).json({ msg: "Post not found" });
      return;
    }
    console.log("Dalej wykonuje");
    const upvote = req.body.vote == 1 ? 1 : 0;
    const downvote = req.body.vote == -1 ? 1 : 0;
    await pool.query(
      "INSERT INTO votes(user_id, post_id, upvote, downvote) VALUES(1,$1,$2,$3) ON CONFLICT(user_id,post_id) DO UPDATE SET upvote=EXCLUDED.upvote, downvote=EXCLUDED.downvote",
      [postId, upvote, downvote]
    );
    res.json("Vote success!");
  } catch (err) {
    console.log("Error on voting:", err);
  }
};

module.exports = {
  getPosts,
  getPost,
  deletePost,
  updatePost,
  addPost,
  votePost,
};
