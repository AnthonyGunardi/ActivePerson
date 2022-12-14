import express from 'express';
import { getPosts, getPost, getPostsByAdmin, getPostsByCreator, getPostsBySearch, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/challenges', getPostsByAdmin);
router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
router.post('/', auth, createPost);
router.get('/:id', getPost);
router.post('/:id/commentPost', auth, commentPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);


export default router;