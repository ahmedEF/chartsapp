import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const RevenueCategorie = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            // fetch data from the endpoint
            const response = await fetch('http://localhost:3000/RevenueCategorie');
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    // extract labels and data from json
    const labels = data.map(item => item.Productline);
    const revenueData = data.map(item => item.Grossincome);

    // format data for the chart
    const chartData = {
        labels: labels,
        datasets: [{
            data: revenueData,
            backgroundColor: '#F7464A',
            hoverBackgroundColor: '#FF5A5E'
        }]
    }

    return (
        <div>
            <h2>Revenue par catégorie</h2>
            <Bar data={chartData} />
        </div>
    )
}

export default RevenueCategorie;
