let contact;
let db = require('../model/db');
function save(req,res){
    contact = req.body;        
    db.saveData(contact)
    .then(()=>{
        res.send("Successfully Inserted");
    })
    .catch(()=>{
        res.send("Data insertion failed");
    });    
}
module.exports = {
    contact,
    save
}