const res = require("express/lib/response");
const userService = require("../services/UserService");

async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);

    } catch (err) {
        res.json({ message: "Error" });
    }
}

async function getById(req, res) {
    const {id} = req.params;
    try {
        const user = await userService.getById(id);
        res.json(user);

    } catch (err) {
        res.json({ message: "Error" });
    }
}

module.exports = { getAllUsers, getById };
