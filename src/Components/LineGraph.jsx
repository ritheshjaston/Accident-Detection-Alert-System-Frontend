import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const LineGraph = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: "Accidents",
      data: []
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Accidents',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: []
      }
    }
  });

  useEffect(() => {
    axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=getchartinfo')
      .then(res => {
        const data = res.data;
        console.log('Data from API:', data);

        // Convert data object to array of objects
        const dataArray = Object.entries(data).map(([date, count]) => ({ date, count }));
        console.log('Data Array:', dataArray);

        // Extract categories and counts
        const categories = dataArray.map(item => item.date);
        console.log('Categories:', categories);
        const counts = dataArray.map(item => item.count);
        console.log('Counts:', counts);

        setChartData({
          series: [{
            name: "Accidents",
            data: counts
          }],
          options: {
            ...chartData.options,
            xaxis: {
              categories: categories
            }
          }
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='chaart'>
     
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LineGraph;