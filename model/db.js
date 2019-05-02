const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://uyshashank:pass1997@mycontacts-etjyh.mongodb.net/';
let client, Email;

(function connect() {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (err, localClient) => {
        client = localClient;
        if (err)
            console.log("Error in establishing connection!", err);
    });
})();

function saveData(contact) {
    let db = client.db('users');
    if(Email == undefined)
        Email = 'a@d';
    return db.collection(Email).insertOne(contact);
}

function loadData(email) {
    let db = client.db('users');
    Email = email;
    if(email == undefined)
        email = 'a@d';
    return db.collection(email).find().toArray();
}

function deleteContact(number){
    let db = client.db('users');
    return db.collection(Email).deleteOne({'Mobile':number});
}
module.exports = {
    saveData,
    loadData,
    deleteContact   
}