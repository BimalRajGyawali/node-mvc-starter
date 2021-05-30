const db = require("../database/DB")

class UserService{
    getAll(error, success){
        const sql = "SELECT * FROM users";
        const con = db.makeConnection()
        con.connect((err)=>{
            if(err){
                console.log(err);
                error("Cannot connect to DB");
            }else{
                con.query(sql, (err, result, fields)=>{
                    if(err) {
                        console.log(err);
                        error("Error in query");
                    }else{
                        success(result)
                    }
                    
                })
            }
        })
    }
}

module.exports = new UserService()