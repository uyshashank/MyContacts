const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://uyshashank:pass1997@mycontacts-etjyh.mongodb.net/';
let client;

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
    return db.collection('uyshashank@gmail.com').insertOne(contact);
}

function loadData() {
    let db = client.db('users');
    return db.collection('uyshashank@gmail.com').find().toArray();
}
module.exports = {
    saveData,
    loadData    
}