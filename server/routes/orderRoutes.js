import express from 'express';
import {
    getOrdersController,
} from "../controllers/orderController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// orders
router.get("/orders", requireSignIn, getOrdersController);

export default router;