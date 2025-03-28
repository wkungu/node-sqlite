import { query } from "./db.js";

export const listAllProducts = () =>{
    return query('SELECT * FROM products', []);
}


export const getProductById = (id) =>{
    return query(`SELECT * FROM products WHERE id = ${id} LIMIT 1`, []);
}