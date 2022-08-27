import express from 'express';
import commentController from '../controllers/comment.controller';

const router = express.Router();

router.get('/', commentController.getComments);
router.post('/', commentController.createComment);

export default router;
