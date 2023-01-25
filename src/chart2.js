import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const ChartComponent = () => {
    const [data, setData] = useState({});
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/chart');
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
        }
        fetchData();
    }, []);

    useEffect(() => {
        let cityLabels = [];    
        let cityData = [];
        let genderLabels = [];
        let genderData = [];

        data.forEach(item => {
            if(item.City){
              cityLabels.push(item.City);
              cityData.push(item.CityCount);
            }
            if(item.Gender){
              genderLabels.push(item.Gender);
              genderData.push(item.GenderCount);
            }
        });
        console.log(chartData);
        setChartData({
            city: {
                labels: cityLabels,
                datasets: [{
                    data: cityData,
                    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
                }]
            },
            gender: {
                labels: genderLabels,
                datasets: [{
                    data: genderData,
                    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
                }]
            }
        });
        console.log('chartData', chartData); // check chartData
    }, [chartData,data]);

    return (
        <div>
            <Bar data={chartData.city} />
            <Bar data={chartData.gender} />
        </div>
    )
}

export default ChartComponent;
