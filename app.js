process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
var express = require("express")
var path = require("path")
var getFiles = require("./lib/getFiles")
var { v4: uuidv4 } = require('uuid');
var login = require("./lib/login")
var signup = require("./lib/signup")
var bodyparser = require("body-parser")
var proxy = require("express-http-proxy")
var services = require("./lib/services")


var app = express()
app.use(bodyparser())
app.use(express.static(path.join(__dirname,"/public")))
app.use("/dist",express.static(path.join(__dirname,"/dist")))
app.set("view engine" , 'ejs')
app.use("/upload",bodyparser.raw(),proxy(services.fileuploadService))
app.listen(2000)
app.get("/",(req,res)=>{
    res.render("landing")
})
app.get("/dashboard/:space" , (req,res)=>{
    
  var space = req.params.space
  
  getFiles(space)
    .then(resp=>{
      console.log(resp)
        res.render("dashboard",{data:resp,space})
    })
    .catch(err=>{
        console.log(err)
      res.render("error", {error : true})
    })
})



app.get("/login" ,(req ,res)=>{
    res.render("login" , {error : false})
})

app.post("/login" , login)

app.get("/uploadFiles" ,(req, res)=>{
    res.render('upload')
})
//app.post("/upload",upload)
app.get("/signup" ,(req,res)=>{
    res.render("signup",{error:false})
})
app.post("/signup",signup)
//https://mongodbservice.aremzy.repl.co/




