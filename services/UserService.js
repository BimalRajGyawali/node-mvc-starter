const db = require("../database/DB")

class UserService{
    getAll(error, success){
        const users = [];
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
                      
                        success(JSON.parse(JSON.stringify(result)))
                    }
                    
                })
            }
        })
    }

    findById(id, error, success){
        const sql = `SELECT * FROM users where id = ${id}`;
        const con = db.makeConnection();
        con.connect((err)=>{
            if(err){
                console.log(err);
                error("Cannot connect to DB");
            }else{
                con.query(sql, (err, result, fields)=>{
                    if(err){
                    error("Cannot connect to DB");i

                    }else{
                        success(JSON.parse(JSON.stringify(result[0])))
                    }
                })
            }
        })
    }
}

module.exports = new UserService()