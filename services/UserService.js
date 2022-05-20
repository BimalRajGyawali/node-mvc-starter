const pool = require("../database/DB")

async function getAllUsers(){
    const users = await (await pool).query("SELECT * FROM users");

    return users;
}

async function getById(id){
    const sql = "SELECT * FROM users WHERE id = ?";
    const user = await (await pool).query({sql, values:[id]});

    return user;
}

module.exports = { getAllUsers, getById }