import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

const app = express();
app.use(express.json());


//started server and connected it to the mongodb
mongoose.connect("mongodb://localhost:27017/lpu").then(()=>{
    app.listen(8084,()=>{
        console.log("Server started at the port 8084"),
        console.log("DATABASE connected")
    })
});

//creating the user schema(blueprint)

const userSchema = mongoose.Schema(
    {
        name:{type:String},
        email:{type:String,unique:true},
        password:{type:String},
        role:{type:String,default:"user"}
    }
);


//  creating the post API for user registration on the post man


