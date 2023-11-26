import express from 'express';
import {
    getProductController,
    getSingleProductController,
    productPhotoController,
    productCountController,
    productFiltersController,
    productListController,
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

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);


export default router;