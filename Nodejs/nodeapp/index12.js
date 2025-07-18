import express from 'express'
import userRouter from './userRoute.js'
import productRouter from './productRoute.js'
const app = express()


app.listen(8083, () => {
  console.log("Server running on port 8083")
})

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)