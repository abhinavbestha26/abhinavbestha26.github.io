// import  express from 'express';
// const app = express();
// app.listen(8080,()=>{
//     console.log('server is running on port 8080');
// })

// app.use(express.json());
// let users = [];
// app.post("/register",(req,res)=>{
//     users.push(req.body)
//     res.json({message:"users logging-in"});
// })

// app.post("/login",(res,req)=>{
//     const {email,password} = req.body;
//     const found = users.find(user => user.email === email && user.password === password);
//     if(found){
//         res.json("u are logined")
//     }else{
//         res.json("Invalid credetials");
//     }
// })
// app.get("/",(req,res)=>{
//     req.json(users);
// })

import express from 'express'

const app = express()
app.listen(8082, () => {
  console.log("Server started at 8080")
})

app.use(express.json());
let users = [];

// const auth = (req, res, next) => {
//   if(req.headers.authorization) {
//     next();
//   } else {
//     res.json({ message: "Invalid token" })
//   }
// }

app.post("/register", (req, res) => {
  users.push(req.body)
  res.json({ message: "New User Registerd" })
})

app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find(user => user.email === email && user.pass === pass);
  if(found) {
    res.json({ message: "Welcome User" });
  } else {
    res.json({ message: "Access Denied" });
  }
})

app.get("/", (req, res) => {
  res.json(users);
})