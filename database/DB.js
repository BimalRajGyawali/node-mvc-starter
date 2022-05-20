const mysql = require("mysql")

function makeConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "test"
    })
}
module.exports = { makeConnection };