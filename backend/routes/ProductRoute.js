import express from "express";
import {
    getProducts,
    getProductsById,
    createProducts,
    updateProducts,
    deleteProducts
} from "../controllers/Products.js";

const router = express.Router();

router.get('/Product', getProducts);
router.get('/Product/:id', getProductsById);
router.post('/Product', createProducts);
router.patch('/Product/:id', updateProducts);
router.delete('/Product/:id', deleteProducts);

export default router;