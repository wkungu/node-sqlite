import sqlite from "better-sqlite3";
import path from "path";

const db = new sqlite(path.resolve("./mydb.db"), { fileMustExist: true});

export const query = (sql, params) =>{
    return db.prepare(sql).all(params)
}

