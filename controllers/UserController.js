const userService = require("../services/UserService")

class UserController{
    getAll(req, res){
        
        userService.getAll((err)=>{
            res.json(err)
        }, (users)=>{
            console.log(users);
            res.render("users", {users: users})
            
        })
    }
    findById(req, res){
        userService.findById(req.params.id, (err)=>{
            res.json(err)
        }, (user)=>{
            res.render("user", {user: user})
        })
    }
}

module.exports = new UserController()