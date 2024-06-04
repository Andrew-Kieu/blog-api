const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postController = require('../controllers/postController');

router.post('/', auth, postController.createPost);

router.get('/', postController.getAllPosts);

router.get('/:id', postController.getPostById);

router.put('/:id', auth, postController.updatePostById);

router.delete('/:id', auth, postController.deletePostById);

module.exports = router;
