const express = require('express')

let conn = require("../config/db")

let router = express.Router()

router.post("/", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    conn.query("SELECT * from user where username = '"+username+"'", (err, result) => {
        if (err) throw err
        else if (result.length != 0){
            if(result[0].password == password){
                res.json(result)
            }
            else{
                res.json({err: "Mot de passe incorrect"})
            }
        }
        else{
            res.json({err: "Nom d'utilisateur invalide"})
        }
    })
})


module.exports = router
