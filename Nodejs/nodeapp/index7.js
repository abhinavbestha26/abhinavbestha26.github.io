import express from 'express'
const app = express()
app.use("/images",express.static("images"));
app.use(express.static("public"));
app.listen(8081,()=>{
    console.log("server started at port 8081");
});

app.get("/products",(req,res)=>{
    res.send("Products List");
})