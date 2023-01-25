import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const ChartComponent = () => {
    const [data, setData] = useState({});
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/RevenueCategorie');
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    useEffect(() => {
        let productLineLabels = [];    
        let grossIncomeData = [];

        data.forEach(item => {
            if(item.Productline){
              productLineLabels.push(item.Productline);
              grossIncomeData.push(item.Grossincome);
            }
        });
        
        setChartData({
            labels: productLineLabels,
            datasets: [{
                data: grossIncomeData,
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
            }]
        });
    }, [data]);

    return (
        <body>
            <Bar data={chartData} />
        </body>
    )
}

export default ChartComponent;
