const router = require('express').Router()
const {
    getPosts,
    getPost,
    addPost,
    deletePost,
    updatePost
} = require('../controllers/posts-controller')


router.get('/',getPosts);
router.get('/:postId',getPost);
router.post('/',addPost);
router.delete('/:postId',deletePost);
router.put('/:postId',updatePost);
module.exports = router;