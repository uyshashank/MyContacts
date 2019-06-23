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
function deleteNumber(req, res){
    let number = req.body.elem_id;
    db.deleteContact(number)
    .then(()=>{
        res.send("Successfully Deleted");
    })
    .catch(()=>{
        res.send("Contact deletion failed");
    });
}

function updateNumber(req,res){
    let mod_contact = req.body;
    db.updateContact(mod_contact)
    .then(()=>{
        res.send("Successfully Updated");
    })
    .catch(()=>{
        res.send("Contact updation failed");
    });
}
module.exports = {
    contact,
    save,
    deleteNumber,
    updateNumber
}