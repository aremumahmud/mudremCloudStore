var { v1: uuidv4 } = require('uuid');
var request = require("superagent")
var services = require("./services")



function login(req ,res){
    var { username , password} = req.body
    console.log(req.body)
    request
        .get(services.auth+"api/signIn/")
        .query({username,password})
        .end((err,resp)=>{
            if(resp) {var login = JSON.parse(resp.text)
            console.log(resp.text,"het")
            }    
            if(err){
                console.log(err)
               res.render("login",{error : true})
            }else if(!login.error){
                
                res.redirect(`/dashboard/${login.login._id}`)
                
                    
            }else{
                res.render("login",{error : true})
                     
            }
        })


}

module.exports = login