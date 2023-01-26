const fs = require('fs');
const Papa = require('papaparse');
const MongoClient = require('mongodb').MongoClient;
  //initialiser l'URI avec les données d'utilisateur pour accéder a la base de données et créé une Instance
const  uri = "mongodb+srv://AHMEDEF:JQXiFDETa7UtrzJ6@cluster0.51prfli.mongodb.net/?retryWrites=true&w=majority";

const insertData = async (file) => {
  // Lire le contenu du fichier CSV
  const data = fs.readFileSync(file, 'utf8');
  // Parser les données avec PapaParse
  const parsedData = Papa.parse(data, {header: true});

  try {
    // Connecter à la base de données MongoDB sur MongoAtlas
    const client = await MongoClient.connect(uri, { useNewUrlParser: true });
    const collection = client.db("chartDB").collection("test2");
    // Insérer les données dans la collection
    for (let row of parsedData.data) {
      await collection.insertOne(row);
    }
    console.log("data inserted to database");
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
};
//initialiser le fichier
const file = 'supermarket_sales.csv';
insertData(file);
