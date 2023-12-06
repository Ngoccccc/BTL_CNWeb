import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
    categoryController,
    createCategoryController,
    deleteCategoryController,
    updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes

//getALl category
router.get("/get-category", categoryController);

// create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
);

//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryController
);

export default router;