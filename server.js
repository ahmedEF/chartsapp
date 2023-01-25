const express = require('express');
const app = express();
const connectToDb = require('./db');
// Démarer le serveur sur le port 3000
app.listen(3000, async () => {
    console.log('Server started on port 3000');
    const collection = await connectToDb();
    setupEndpoints(collection);
});
//Definir les endpoints pour le serveur
const setupEndpoints = (collection) => {
    app.get('/chart', async (req, res) => {
        try {
            const data = await collection.find({}, { projection: { _id: 0,City: 1, Gender: 1 } }).toArray();
           
            res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }
          });
          app.get('/RevenueCategorie', async (req, res) => {
            try {
                const data = await collection.find({}, { projection: { _id: 0,Grossincome: 1, Productline: 1 } }).toArray();
                res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }
          });
          app.get('/AchatType', async (req, res) => {
            try {
                const data = await collection.find({}, { projection: { _id: 0,cogs: 1, Customertype: 1 } }).toArray();
                res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }        
         });   
         app.get('/RatingparSexe', async (req, res) => {
          try {
              const data = await collection.find({}, { projection: { _id: 0,Rating: 1, Gender: 1 } }).toArray();
              res.json(data);
        } catch(err) {
        console.log(err);
        res.status(500).send('Error retrieving data from the database');
        }        
       });  
          };
  
