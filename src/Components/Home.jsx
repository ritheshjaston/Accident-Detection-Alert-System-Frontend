import React from 'react';
import Typography from '@mui/material/Typography';
import './widget.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import LineGraph from './LineGraph';
function Home() {
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
                        <h1>120</h1>
                        <ArrowOutwardIcon sx={{ color: 'blue' }}/>
                    </div>
                </div>
                <div className='w1'>
                    Accidents
                    <div>
                        <h1>130020</h1>
                        <ArrowOutwardIcon sx={{ color: 'red' }}/>
                    </div>
                </div>
                <div className='w1'>
                    Ambulances
                    <div>
                        <h1>120</h1>
                        <ArrowOutwardIcon sx={{ color: 'green' }}/>
                    </div>
                </div>
                <div className='w1'>
                    Fire Stations
                    <div>
                        <h1>2000</h1>
                        <ArrowOutwardIcon sx={{ color: 'purple' }}/>
                    </div>
                </div>

            </div>

            <div className='charts'>
                <LineGraph/>
            </div>

        </div>
    );
}

export default Home;
