import { Router } from "express";
import conn from '../database.js'

const router = Router();//INICIALIZACION DEL ROUTER

//GET PARA PRODUCTOS
router.get('/productos/list', async(req, res) => {
    try { 
        const [result] = await conn.query("SELECT * FROM productos")
        res.json({productos:result, status:200, message:'OK'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

//POST para añadir productos
router.post('/productos/add', async(req,res) => {
    try {
        if(req.body && req.body.lenght > 0){
            const { name, price, urlIMG } = req.body;
            await conn.query("INSER INTO productos (name,price,urlIMG,deleted) VALUES (?,?,?,?)",[name,price,urlIMG,0])
            return res.json({status:200, message:'Producto añadido'})
        }else{
            return res.status(401).json({message:"No se han enviado datos del producto"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

//GET DELETE productos
router.get("/productos/delete/:id", async(req, res) => {
    try {
        const {id} = req.params;
        if ( id === undefined || id === null  || id === "") return res.status(401).json({message:"No se ha especificado el producto"});
        await conn.query("DELETE FROM productos WHERE id=?",[id]);
        res.status(200).json({message:`El producto con id ${id} ha sido eliminado`})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

//POST para UPDATE de producto
router.post('/productos/update/:id', async(req,res) => {
    try {
        const {id} = req.params;
        if(req.body && req.body.lenght > 0 && (id ?? false) && id !== ""){
            const { name, price, urlIMG } = req.body;
            await conn.query("UPDATE productos SET name=?, price=? ,urlIMG=? ,deleted=? WHERE id=?",[name,price,urlIMG,id])
            return res.json({status:200, message:'Producto añadido'})
        }else{
            return res.status(401).json({message:"No se han enviado datos del producto"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

export default router;