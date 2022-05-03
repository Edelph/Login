const express = require('express')

let conn = require("../config/db")

let router = express.Router()

router.get("/", (req,res) => {
    
})

router.post("/", (req, res) => {
    mysql.query("SELECT * from login where ", (err) => {
        if 
    })
    user = req.body
})


module.exports = router
