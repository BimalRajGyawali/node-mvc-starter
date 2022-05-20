const express = require("express")
const userRouter = require("./routers/UserRouter")

const app = express()

app.set('view engine', 'ejs');

app.use("/users", userRouter)

app.listen(8000)