import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function MyComponent() {
  // Initialisation de l'état 'data' vide
  const [data, setData] = useState([]);

  useEffect(() => {
    // Récupération des données depuis l'URL '/RatingparSexe'
    fetch('http://localhost:3000/RatingparSexe')
      .then(res => res.json())
      .then(data => {
        // Mise à jour de l'état 'data' avec les données récupérées
        setData(data);
      });
  }, []);
   // returner le chart avec les données 'data'
  return (
    <div>
    <h3>Statistiques moyenne de rating par sexe</h3>
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="Gender" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="Rating" fill="#8884d8" />
    </BarChart>
    </div>
  );
}


export default MyComponent;