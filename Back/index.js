let express = require('express')
let userRoute = require("./Routes/User")
const app = express()


app.use("/", userRoute)


app.listen(3001, () => {
    console.log("Server launched");
})

