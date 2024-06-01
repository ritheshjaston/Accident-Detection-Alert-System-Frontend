import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import './widget.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import axios from 'axios';
import LineGraph from './LineGraph';
function Home() {

    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=dashboard');
                setDashboardData(response.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getGreeting = () => {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
            return 'Good morning, Have a Good Day..';
        } else if (currentTime < 18) {
            return 'Good afternoon Dear';
        } else {
            return 'Good evening!';
        }
    };


    return (
        <div>
            <Typography variant="h4">{getGreeting()}</Typography>
            <div className='widget'>
                <div className='w1'>
                    Users
                    <div>
                        <h1>{dashboardData?.Users || '...'}</h1>
                        <ArrowOutwardIcon style={{ color: dashboardData?.Users ? 'blue' : 'gray' }} />
                    </div>

                </div>
                <div className='w1'>
                    Accidents
                    <div>
                        <h1>{dashboardData?.Accidents || '...'}</h1>
                        <ArrowOutwardIcon style={{ color: dashboardData?.Users ? 'red' : 'gray' }} />
                    </div>

                </div>
                <div className='w1'>
                    Ambulances
                    <div>
                        <h1>{dashboardData?.Hospitals || '...'}</h1>
                        <ArrowOutwardIcon style={{ color: dashboardData?.Users ? 'green' : 'gray' }} />
                    </div>

                </div>
                <div className='w1'>
                    Fire Stations
                    <div>
                        <h1>{dashboardData?.Fire || '...'}</h1>
                        <ArrowOutwardIcon style={{ color: dashboardData?.Users ? 'purple' : 'gray' }} />
                    </div>

                </div>

            </div>

            <div className='charts'>
                <LineGraph />
            </div>

        </div>
    );
}

export default Home;
