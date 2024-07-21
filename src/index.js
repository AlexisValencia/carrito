import express from "express";
import morgan from "morgan";
import {fileURLToPath} from "url";
import {join, dirname} from "path";
import cors from "cors";
import productosRoutes from './routes/productos.routes.js';//Importacion del manejo de productos


/**INICIALIZACION**/
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)) // Se obtiene el valor de la url

/**CONFIGURACION**/
app.use(cors({
    origin:["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}));
app.set("port", process.env.SERVER_PORT || 4000);


/**PARTIALS**/


/**MIDDLEWARE**/
app.use(morgan("dev")); // PERMITE VER LAS PETICIONES QUE SE HACEN
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // PERMITE TRABAJAR CON LOS JSON


/**RUTAS**/
app.get("/", (req, res) =>{
    console.log("Hola")
    res.status(200).json({message:'Todo Ok cabron'})
})

/**MANEJO DE RUTAS**/
app.use('/api', productosRoutes); // Usa el archivo de rutas para las peticiones a /api/productos


/**ARCHIVOS PUBLICOS**/
app.use(express.static(join(__dirname, 'public')));


/**EJECUCION DEL SERVIDOR**/
app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
});