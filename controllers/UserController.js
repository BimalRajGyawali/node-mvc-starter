const userService = require("../services/UserService")

class UserController{
    getAll(req, res){
        userService.getAll((err)=>{
            res.json(err)
        }, (users)=>{
            res.json(users)
        })
    }
}

module.exports = new UserController()