var request = require("superagent")
var services = require("./services")
function Signup(req, res){
  var {username , password} = req.body
  console.log(req.body)
  request
       .get(services.auth+"api/signUp")
       .query({username,password})
       .end((err, resp)=>{
         if(resp){
            var signup = JSON.parse(resp.text) 
         }
           
         if(err){
             console.log(err)
           res.render("signup",{error:true})
           console.log("er d n")
         }else if(signup.error){
             console.log("error")
             res.render("signup",{error:true})
         }else{
           res.render("login")
         } 
       })
}
module.exports = Signup