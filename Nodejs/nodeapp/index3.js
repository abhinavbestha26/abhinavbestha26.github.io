import express from 'express';

const app = express();
app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})
// app.get("/",(req,res)=>{
//     res.send("HI BRO");
// })

// app.get("/user",(req,res)=>{
//     res.send("HI USER");
// })

// app.get("/ab*cd",(req,res)=>{
//     res.send("WELCOME TO CYBER WORLD");
// })


const products = [
        {id:1,name:"product 1" , price:12},
        {id:2,name:"product 2" , price:13},
        {id:3,name:"product 3" , price:14},
        {id:4,name:"product 4" , price:15},
        
    ]

app.get("/products/:id",(req,res)=>{
    const pid = req.params.id;
    
    res.json();

})





// here this name becomes variable
// app.get("/:name",(req,res)=>{
//     res.send(req.params.name);
// })



// here it will execute inly by entering the name
// app.get("/name",(req,res)=>{
//     res.send(req.params.name);
// })

// app.get("/student/:name",(req,res)=>{
//     res.send(req.params.name);
// })

// app.get("/student/:name/age/:age",(req,res)=>{
//     res.send(req.params.name+req.params.age);
// })

// app.get("/student/:name/:age",(req,res)=>{    //now no need to use age word
//     res.send(req.params.name+req.params.age);
// })



// app.get("/",(req,res)=>{      //in authorization  auth type bearer token ,provide toke number ,
// res.send(req.headers.authorization);
// })


// app.get("/",(req,res)=>{
//     res.send(req.query.name);  // now in query we can pass name it will display in output and also end point
// });