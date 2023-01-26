const express = require('express');
const app = express();
const connectToDb = require('./db');
//middleware cors 
const cors = require('cors');

//Démarrage du serveur sur le port 3000
app.listen(3000, async () => {  
    console.log('Server started on port 3000');
    // connexion à la base de données

    const collection = await connectToDb();

   // configuration des points d'extrémité pour gérer les demandes HTTP
    setupEndpoints(collection);
});

//permet à l'interface utilisateur de consommer les points d'extrémité
app.use(cors({origin: 'http://localhost:3001'}));

const setupEndpoints = (collection) => {
          

    // point d'extrémité pour récupérer les données pour le graphique  grossincome et productline
    app.get('/RevenueCategorie', async (req, res) => {
            try {

                   // utilisation de la méthode MongoDB find pour récupérer les données de la collection
                const data = await collection.find({}, { projection: { _id: 0,'gross income': 1,'gross margin percentage':1, 'Product line': 1 } }).toArray();

                // envoyer les données en format json au client
                res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }
          });


    // point d'extrémité pour récupérer les données pour le graphique de cogs par customertype
    app.get('/AchatType', async (req, res) => {
            try {

                 // utilisation de la méthode MongoDB find pour récupérer les données de la collection
                const data = await collection.find({}, { projection: { _id: 0,cogs: 1, 'Customer type': 1 } }).toArray();

                 // envoyer les données en format json au client
                res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }        
         });   



    // point d'extrémité pour récupérer les données pour le graphique  Rating et sexe(Gender)
    app.get('/RatingparSexe', async (req, res) => {
          try {
                // utilisation de la méthode MongoDB find pour récupérer les données de la collection
              const data = await collection.find({}, { projection: { _id: 0,Rating: 1, Gender: 1 } }).toArray();

                // envoyer les données en format json au client

              res.json(data);
        } catch(err) {
        console.log(err);
        res.status(500).send('Error retrieving data from the database');
        }        
       });  
          };
