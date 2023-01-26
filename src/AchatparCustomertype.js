import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Composant React qui affiche un graphique à barres horizontales pour visualiser les revenus bruts par catégorie de produit
function MyComponent() {
 // Initialisation de l'état 'data' vide
   const [data, setData] = useState([]);

  useEffect(() => {
    // Récupération des données depuis l'URL '/RevenueCategorie'
    fetch('http://localhost:3000/AchatType')
    .then(res => res.json())
    .then(data => {
      // Mise à jour l'etat 'data' avec les données récupérées
      setData(data);
    });
}, []);
 // returner le chart avec les données 'data'
  return (
   <div><h3>Stastistiques de nombre total des achats par type de client</h3>
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="Customer type" />
      <YAxis />
      <CartesianGrid strokeDasharray="3" />
      <Tooltip />
      <Bar dataKey="cogs" fill="#8884d8"  />
    </BarChart>
    </div>
  );
}

export default MyComponent;



