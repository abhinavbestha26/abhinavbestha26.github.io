// import express from 'express'

// const Router = express.Router();

// Router.get('/show', (req, res) => {
//   res.json({message: "we are in users/show endpoint"})
// })
// Router.post('/register', (req, res) => {
//   res.json({message: "User registration API"})
// })
// Router.post('/login', (req, res) => {
//   res.send({message: "User login API"})
// })

// export default Router


import mongoose from 'mongoose';
import bycrypt from 'bcrypt'
import express from 'express'
import jwt from 'jsonwebtoken'
import { authenticate,authorize } from './auth.js';
import {register} from "./userController.js"
import {login} from "./userController.js"
const SECRET = "sometext"


const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "user" }
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema)

  userRouter.post("/register",register);

userRouter.post("/login", login);

userRouter.patch("/update/:email", (reeq, res) => {
  
});





userRouter.get("/showUsers", authenticate,authorize("admin"),showUsers);

userRouter.patch("/:id",authenticate, authorize,update);


userRouter.delete("/:id",authenticate,authorize,);



userRouter.get("/:id/profile", authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findOne({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "something went wrong" });
  }
})

const userRouter = express.Router();
