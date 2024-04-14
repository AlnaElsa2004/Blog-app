import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Beauty2004@",
    database: "blog"
});
