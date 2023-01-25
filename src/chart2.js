import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const ChartComponent = () => {
    const [data, setData] = useState({});
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/RevenueCategorie');
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
        }
        fetchData();
    }, []);

    useEffect(() => {
        let grossincomeLabels = [];    
        let grossincomeData = [];
        let productlineLabels = [];
        let productlineData = [];

        data.forEach(item => {
            if(item.Grossincome){
              grossincomeLabels.push(item.Grossincome);
              grossincomeData.push(item.Grossincomecount);
            }
            if(item.Gender){
              productlineLabels.push(item.Productline);
              productlineData.push(item.Productlinecount);
            }
        });
        console.log(chartData);
        setChartData({
            Grossincome: {
                labels: grossincomeLabels,
                datasets: [{
                    data: grossincomeLabels,
                    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
                    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5']
                }]
            },
            Productline: {
                labels: productlineLabels,
                datasets: [{
                    data: productlineData,
                    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
                    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5']
                }]
            }
        });
        console.log('chartData', chartData); // check chartData
    }, [chartData,data]);

    return (
        <div>
            <Bar data={chartData.grossincome} />
            <Bar data={chartData.productline} />
        </div>
    )
}

export default ChartComponent;
