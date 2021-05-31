const express = require("express")
const app = express()


const userRouter = require("./routers/UserRouter")

app.set('view engine', 'ejs');


app.use("/users", userRouter)
app.listen(8000)