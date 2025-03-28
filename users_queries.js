import { query } from "./db.js"

export const listAllUsers = () =>{
    return query("SELECT * FROM users", [])
}

export const getUserById = (id) =>{
    return query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`, []);
}

export const getUserProducts = (id) =>{
    return query(`SELECT * FROM products WHERE user_id = ${id} LIMIT 10`, []);
}

export const getUserByEmail = (email) =>{
    return query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`, []);
}