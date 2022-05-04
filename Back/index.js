let express = require('express')
const app = express()

let userRoute = require("./Routes/User")
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/login", userRoute)

app.get("/", (req, res) => {
    res.send("hello")
})


app.listen(3001, () => {
    console.log("Server launched");
})

