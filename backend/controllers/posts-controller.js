const pool = require("../database/db");

const getPosts = async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM posts");
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

const addPost = async (req,res)=>{
    try{
        const post = await pool.query('INSERT INTO posts (title, body) VALUES ($1, $2)',
        [req.body.title, req.body.body]);
        res.json('Inserted successfully');
    }catch (err) {
        console.error(err.message);
    }
}

const updatePost = async (req,res)=>{
    try{
        const title = req.body.title;
        const body = req.body.body;
        const postId= req.params.postId;
        const post = await pool.query('UPDATE posts (title, body) SET ($1, $2) WHERE id=$3',
        [title, body, postId]);
        res.json('Updated successfully', post);
    }catch (err) {
        console.error(err.message);
    }
}

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    console.log('Received postId ', postId);
    await pool.query("DELETE FROM posts where id=$1", [postId]);
    res.json("Deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
    getPosts,
    getPost,
    deletePost,
    updatePost,
    addPost
}
