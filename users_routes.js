import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { listAllUsers, getUserByEmail, getUserById, getUserProducts } from "./users_queries.js";

dotenv.config();

const router = express.Router();

// Fake login (Normally, you'd validate passwords)
router.post("/login", (req, res) => {
    const { email } = req.body;
    const results = getUserByEmail(email);
    const user = results[0];

    if (!user) {
        return res.status(401).json({ message: "Invalid email." });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email, name: user.first_name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
});



router.get("/", (req, res, next) =>{
    try{
        res.json(listAllUsers());
    }catch(e){
        console.log('Error', e);
        next(e);
    }
});


router.get("/:id", (req, res, next) =>{
    try{
        res.json(getUserById(req.params.id));
    }catch(e){
        console.log('Error', e);
        next(e);
    }
});

router.get("/:id/products", (req, res, next) =>{
    try{
        res.json(getUserProducts(req.params.id));
    }catch(e){
        console.log('Error', e);
        next(e);
    }
});


export { router as UsersRoutes}