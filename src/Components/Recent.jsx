import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

function Recent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=recentAcc')
            .then(response => {
                setData(response.data[0]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div class="loader"></div>;
    }

    const {
        Accidents,
        Action,
        Allocated,
        HSRP,
        Longitude,
        latitude,
        HospitalName,
        EmailHosp,
        Address,
        Phone
    } = data;

    return (
        <div>
            <Typography paragraph>
               <h4>Last Accident Info</h4>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '400px', width: '100%' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src={`https://maps.google.com/maps?q=${latitude},${Longitude}&hl=es&z=14&output=embed`}
                        ></iframe>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Accident Details
                            </Typography>
                            <Typography>
                                <strong>HSRP:</strong> {HSRP}
                            </Typography>
                            <Typography>
                                <strong>Accidents Type:</strong> {Accidents}
                            </Typography>
                            <Typography>
                                <strong>Action:</strong> {Action}
                            </Typography>
                            <hr />
                            <Typography>
                                <strong>Allocated:</strong> {Allocated}
                            </Typography>
                            <Typography>
                                <strong>Address:</strong> {Address}
                            </Typography>
                            <Typography>
                                <strong>Email:</strong> {EmailHosp}
                            </Typography>
                            <Typography>
                                <strong>Phone:</strong> {Phone}
                            </Typography>
                            <Typography>
                                <strong>{Accidents === "FIRE" ? "Fire Service Name" : "Hospital Name"}:</strong> {HospitalName}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Recent;
