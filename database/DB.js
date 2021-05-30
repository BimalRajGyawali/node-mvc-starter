const mysql = require("mysql")

class DB{
    makeConnection(){
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "node-mvc"
        })
    }
}

module.exports = new DB();