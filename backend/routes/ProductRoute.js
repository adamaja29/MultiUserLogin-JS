import express from "express";
import {
    getProducts,
    getProductsById,
    createProducts,
    updateProducts,
    deleteProducts
} from "../controllers/Products.js";
import { verifyUser } from "../middleware/Authuser.js";

const router = express.Router();

router.get('/Product', verifyUser, getProducts);
router.get('/Product/:id', verifyUser, getProductsById);
router.post('/Product', verifyUser, createProducts);
router.patch('/Product/:id', verifyUser, updateProducts);
router.delete('/Product/:id', verifyUser, deleteProducts);

export default router;