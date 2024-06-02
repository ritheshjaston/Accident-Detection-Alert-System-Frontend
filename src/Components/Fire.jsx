import React from 'react';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Viewuser.css';
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';

function Fire() {
    const [loading, setLoading] = useState(false);
    const [table, settable] = useState(true);
    const [data, setdata] = useState("");
    const [json, setjson] = useState([]);

    useEffect(() => {
        setLoading(true);
        settable(false);
        axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=getFire')
            .then(res => {
                var persons = res.data;
                var person = persons.replace(/'/g, '"');
                console.log(person);
                setLoading(false);
                setjson(JSON.parse(person));
                settable(true);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
                setdata("Please Try again After some time.");
            });
    }, []);

    return (
        <div>
            <Typography variant="h5" >
                Fire Service
            </Typography>
            <div className='headerbar'>
                <Link to="/Add_Fire" className='newbtn'>New</Link>
            </div>
            <br />
            <br />
            <br />
            <hr />
            {loading && (
                <>
                    <br />
                    <br />
                    <br />
                    <div class="loader"></div>
                </>
            )}
            {table && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Fire Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Fire Avl</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {json.map(item => (
                                <TableRow key={item.ID}>
                                    <TableCell>{item.ID}</TableCell>
                                    <TableCell>{item.fname}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.address}</TableCell>
                                    <TableCell>{item.FireServiceAvl}</TableCell>
                                    <TableCell>{item.longitude} / {item.latitude}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <Typography variant="h5">{data}</Typography>
        </div>
    );
}

export default Fire;
