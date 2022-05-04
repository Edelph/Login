var mysql = require('mysql')

let host = "localhost"
let user = "root"
let password = ""
let database = "login"

let connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
})

connection.connect((err) => {
    if (err) throw err
})

module.exports = connection
