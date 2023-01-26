import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Composant React qui affiche un graphique à barres horizontales pour visualiser les revenus bruts par catégorie de produit
function MyComponent() {
  // Utilisation de la fonctionnalité de mémoire de React pour stocker les données récupérées

const [data, setData] = useState([]);

useEffect(() => {
fetch('http://localhost:3000/RevenueCategorie')
.then(res => res.json())
.then(data => {
  // Grouper les données par 'Product line'
const groupedData = data.reduce((acc, current) => {
const key = current['Product line'];
if (!acc[key]) {
acc[key] = { Product_line: key, gross_income: 0 };
}
//calculer grossvolume par current['gross income']*current['gross margin percentage']
acc[key].gross_income = current['gross income']*current['gross margin percentage'];
return acc;
}, {});

    const chartData = Object.values(groupedData);
    // Mise à jour de l'état 'data' avec les données récupérées
    setData(chartData);
  });

}, []);
 // returner le chart avec les données 'data'
return (
  <div><h3>Statistiques Revenue brut par Catégorie de produit </h3>
<BarChart layout="vertical" width={600} height={300} data={data}>
<YAxis type="category" dataKey="Product_line" />
<XAxis  />
<CartesianGrid strokeDasharray="3 3" />
<Tooltip />
<Bar dataKey="gross_income" fill="#8884d8" />
</BarChart></div>
);
}

export default MyComponent;
