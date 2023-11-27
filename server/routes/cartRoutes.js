// routes/cart.js
import express from "express";
const router = express.Router();
import {
    getCartByUserId,
    addToCart,
    updateCartItem,
} from "../controllers/cartController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

router.get('/:userId', requireSignIn, getCartByUserId);
router.post('/add', requireSignIn, addToCart);
router.put('/update/:cartItemId', requireSignIn, updateCartItem);

export default router;