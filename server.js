const express = require('express');
const app = express();
const connectToDb = require('./db');

app.listen(3000, async () => {
    console.log('Server started on port 3000');
    // connect to the database
    const collection = await connectToDb();
    // setup endpoints for handling HTTP requests
    setupEndpoints(collection);
});

const setupEndpoints = (collection) => {
    // endpoint for retrieving data for chart of city and gender
    app.get('/chart', async (req, res) => {
        try {
            // use MongoDB find method to get data from collection
            const data = await collection.find({}, { projection: { _id: 0,City: 1, Gender: 1 } }).toArray();
            // send data as json to client
            res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }
          });
          // endpoint for retrieving data for chart of grossincome and productline
    app.get('/RevenueCategorie', async (req, res) => {
            try {
                // use MongoDB find method to get data from collection
                const data = await collection.find({}, { projection: { _id: 0,Grossincome: 1, Productline: 1 } }).toArray();
                // send data as json to client
                res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }
          });
          // endpoint for retrieving data for chart of cogs and customertype
    app.get('/AchatType', async (req, res) => {
            try {
                // use MongoDB find method to get data from collection
                const data = await collection.find({}, { projection: { _id: 0,cogs: 1, Customertype: 1 } }).toArray();
                // send data as json to client
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }        
         });   
    // endpoint for retrieving data for chart of cogs and customertype
         app.get('/RatingparSexe', async (req, res) => {
          try {
              const data = await collection.find({}, { projection: { _id: 0,Rating: 1, Gender: 1 } }).toArray();
              // send data as json to client
              res.json(data);
        } catch(err) {
        console.log(err);
        res.status(500).send('Error retrieving data from the database');
        }        
       });  
          };
  
