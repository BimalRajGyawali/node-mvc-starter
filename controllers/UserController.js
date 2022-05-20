const userService = require("../services/UserService")

async function getAllUsers(){
    return userService.getAllUsers();
}

async function getById(id){
    return userService.getById(id);
}

module.exports = {getAllUsers, getById}