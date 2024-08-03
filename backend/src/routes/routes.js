import express from 'express';
import { postUserRegister, postUserLogin, getFormData, postFormData } from '../controllers/systemController.js';

const router = express.Router();

router.get('/', getFormData);
router.get('/register/', postUserRegister);
router.get('/login/', postUserLogin);
router.post('/post-form/', postFormData)

export default router;