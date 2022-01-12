var services = require("./services")
var request = require("superagent")

function getFiles(space){
    console.log(space)
    return new Promise((res,rej)=>{
        request
            .get(services.mongodb+"allRecords")
            .query({FileFolderPath:space})
            .end((err , resp)=>{
                if(err){
                    console.log(err)
                    rej(err)
                }else{
                      
                    res(JSON.parse(resp.text))
               }
            })
    
    })
}


module.exports = getFiles