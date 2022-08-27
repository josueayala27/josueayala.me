import express from 'express';
import { github } from '../controllers/auth.controller';
import validate from '../middlewares/validate';
import authValidation from '../validations/auth.validation';

const router = express.Router();

router.post('/github', validate(authValidation.login), github);

export default router;
