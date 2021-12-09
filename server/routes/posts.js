import express from 'express';

import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, deletePost, commentPost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts); //To see posts, we don't need to login 
router.get('/search',getPostsBySearch);
router.get('/creator', getPostsByCreator);
router.post('/', auth,createPost); //To create post,auth is required
router.get('/:id', getPost); //To get single post for post details component
router.patch('/:id', auth,updatePost); //To update post,auth is required
router.delete('/:id', auth, deletePost); //To delete post,auth is required
router.patch('/:id/likePost',auth, likePost); //To like posts,auth is required
router.patch('/:id/commentPost',auth, commentPost);

export default router;