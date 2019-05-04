const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb+srv://username:<password>@mycontacts-etjyh.mongodb.net/';
let client, Email;

(function connect() {
    MongoClient.connect(url, {
            useNewUrlParser: true
        })
        .then((localclient) => {
            client = localclient;
        })
        .catch((err) => console.log("Error in connnecting! " + err));
})();
function userCount(){    
    let db = client.db('users');        
    return db.collection('userCount').findOneAndUpdate({
        '_id': new ObjectID('5ccd61231c9d440000fc4f65')
    }, {
        $inc: {
            'userCount':1
        }
    }, {
        returnOriginal: false
    });
}
function saveData(contact) {
    let db = client.db('users');
    
    return db.collection(Email).insertOne(contact);
}

function loadData(email) {
    let db = client.db('users');
    Email = email;    
    return db.collection(email).find().toArray();
}

function deleteContact(number) {
    let db = client.db('users');
   
    return db.collection(Email).deleteOne({
        'Mobile': number
    });
}

function updateContact(contact) {
    let db = client.db('users');
    
    return db.collection(Email).findOneAndUpdate({
        'Mobile': contact.old_mobile
    }, {
        $set: {
            'Name': contact.Name,
            'Mobile': contact.Mobile,
            'Category': contact.Category
        }
    }, {
        returnOriginal: false
    });    
}

module.exports = {
    saveData,
    loadData,
    deleteContact,
    updateContact,
    userCount
}