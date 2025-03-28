import express from "express";
import { ProductsRoutes } from "./products_routes.js";
import { UsersRoutes } from "./users_routes.js";

const app = express();

app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Welcome to the world");
});

app.use("/products", ProductsRoutes);
app.use("/users", UsersRoutes);

app.listen(8000, () =>{
    console.log("Listenining on port 8000");
});