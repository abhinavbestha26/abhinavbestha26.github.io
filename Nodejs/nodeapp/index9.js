import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

    const app = express();
    app.use(express.json());
const SECRET = "sometext";
app.listen(8084,()=>{
    console.log("server started at the port 8084");
})

let products = [];
app.post("/registerprod",(req,res)=>{
    const {id, name, price} = req.body;
    const obj = {
        id,
        name,
        price
    };
    products.push(obj);
    res.json({message:"products created"});
})

app.get("/allproducts",(req,res)=>{
        res.json(products);
})
app.delete("/:id",(req,res)=>{
    const id = Number(req.params.id);
    products = products.filter((products)=>products.id !==id);
    res.json("products deleted");
})
