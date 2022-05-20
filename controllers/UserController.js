const res = require("express/lib/response");
const userService = require("../services/UserService");

async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.render("users", { users });

    } catch (err) {
        res.json({ message: "Error" });
    }
}

async function getById(req, res) {
    const {id} = req.params;
    try {
        const user = await userService.getById(id);

        res.render("user", { user })

    } catch (err) {
        res.json({ message: "Error" });
    }
}

module.exports = { getAllUsers, getById };
