import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();//Inicializa la toma de valores desde el fichero .env

const conn = createPool({
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 3306,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})

export default conn ;