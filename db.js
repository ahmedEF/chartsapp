const MongoClient = require('mongodb').MongoClient;
const  uri = "mongodb+srv://AHMEDEF:JQXiFDETa7UtrzJ6@cluster0.51prfli.mongodb.net/?retryWrites=true&w=majority";
// fonction permet de connecter a la base de données mongodb atlas avec un lien uri 
const connectToDb = async () => {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true });
        return client.db("chartDB").collection("test");
    } catch(err) {
        console.log(err);
    }
};
// exporter la fonction pour utiliser dans les autres fichiers
module.exports = connectToDb;
