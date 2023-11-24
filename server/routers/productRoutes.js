import express from 'express';
import {
    deleteProductController,
    getProductController,
    getSingleProductController,
    productPhotoController,
} from '../controllers/productController.js';

import { requireSignIn } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';

const router = express.Router();

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

export default router;