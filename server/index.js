const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")
const app = express()

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch(err => console.log(err))

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)

app.listen(process.env.PORT || 6000, () => {
    console.log(`Server is running!`)
})


