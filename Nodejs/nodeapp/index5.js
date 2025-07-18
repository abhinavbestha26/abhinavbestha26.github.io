// index5.js
import express from "express";
const app = express();
app.use(express.json());
let products = [];
app.post("/", (req, res) => {
    products.push(req.body);
    res.json({ message: "product received" });
});

app.get("/", (req, res) => {
    res.json(products);
});

app.listen(8081, () => {
    console.log("server started");
});
