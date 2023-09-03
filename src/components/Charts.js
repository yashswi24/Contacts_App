// src/components/LineChart.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Charts = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    // Fetch data from the API
    axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        // Extract the data you want to display in the chart
        const chartData = {
          labels: ['Cases', 'Deaths', 'Recovered'],
          datasets: [
            {
              label: 'COVID-19 Data',
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.4)',
              hoverBorderColor: 'rgba(75,192,192,1)',
              data: [response.data.cases, response.data.deaths, response.data.recovered],
            },
          ],
        };
        setData(chartData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>COVID-19 Data</h2>
      <Line data={data} />
    </div>
  );
};

export default Charts;
