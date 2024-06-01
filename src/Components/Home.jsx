import React from 'react';
import Typography from '@mui/material/Typography';

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
        </div>
    );
}

export default Home;
