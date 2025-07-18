import express from 'express'
const app = express()
app.listen(8000,()=>{
    console.log("server started")
})

// const logger = (req,res,next) => {
//     req.msg = "hello";
//     next();
// }




// const auth = (req,res,next) =>{
//     const name = req.params.name;
//     if(name === "john"){
//         next();
//     }else{
//         res.send("Access denyed");
//     }
// };
// app.get("/:name",auth,(req,res)=>{
//     res.send("hello World");
// })



// app.use(logger);
// app.get("/",(req,res)=>{
//     res.send(req.msg+"Worldddd");
// });

// app.get("/products",logger,(req,res)=>{
//     res.send(req.msg+"products");
// })
// app.get("/john",(req,res)=>{
//     res.send(req.msg+"helloWorld");
// })


// app.get("/",(req,res)=>{
//     res.send('Hello World');
// })