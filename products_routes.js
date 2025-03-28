import express from "express";
import { listAllProducts, getProductById } from "./products_queries.js";
import { authenticateToken } from "./auth_middleware.js";

const router = express.Router();

router.get("/", authenticateToken, (req, res, next) =>{
    try{
        res.json(listAllProducts());
    }catch(e){
        console.log('Error', e);
        next(e);
    }
});

router.get("/:id", authenticateToken, (req, res, next) =>{
    try{
        res.json(getProductById(req.params.id));
    }catch(e){
        console.log('Error', e);
        next(e);
    }
});

export { router as ProductsRoutes}