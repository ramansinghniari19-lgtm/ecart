import express from 'express';
import { isAuth } from '../middleware/isAuth.js';
import { createproduct } from '../controller/Product.js';
import uploadFiles from '../middleware/multer.js';

const router = express.Router()
router.post("/product/new",isAuth,uploadFiles,createproduct)
export default router;