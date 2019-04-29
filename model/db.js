const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://uyshashank:pass1997@mycontacts-etjyh.mongodb.net/';

MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
    if(err)
        return console.log("Error Occured in connecting!", err);

    console.log("Connection established!");
    client.close();
});
