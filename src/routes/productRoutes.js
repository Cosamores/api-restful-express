import express from 'express';

import listProducts from '../controllers/product/listProducts.js';

const router = express.Router();

router.get('/', listProducts)


export default router;
