import express from 'express';
import { uploadFile } from '../controllers/uploadController.js';
import { protect } from '../middleware/authMiddleware.js';
import multer from '../config/multerConfig.js';

const router = express.Router();

router.post('/upload', protect, multer.single('file'), uploadFile);

export default router;
