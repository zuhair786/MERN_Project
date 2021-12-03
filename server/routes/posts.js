import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts); //To see posts, we don't need to login 
router.post('/', auth,createPost); //To create post,auth is required
router.get('/:id', getPost);
router.patch('/:id', auth,updatePost); //To update post,auth is required
router.delete('/:id', auth, deletePost); //To delete post,auth is required
router.patch('/:id/likePost',auth, likePost); //To like posts,auth is required

export default router;