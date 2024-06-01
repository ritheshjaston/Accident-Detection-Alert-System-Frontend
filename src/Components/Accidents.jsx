import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { Link } from "react-router-dom";
import './Viewuser.css';

export default function Accidents() {
    const [loading, setLoading] = useState(false);
    const [table, setTable] = useState(true);
    const [data, setData] = useState("");
    const [json, setJson] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTable(false);
        axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=getAccident')
            .then(res => {
                const persons = res.data;
                console.log(persons);
                const person = persons.replace(/'/g, '"');
                setLoading(false);
                setJson(JSON.parse(person));
                setTable(true);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
                setData("Please Try again After some time.");
            });
    }, []);

    return (
        <div>
            <br />
            <Typography variant="h5" gutterBottom>
                Accidents
            </Typography>
            <div className='headerbar'>
                {/* <Link to="/DeviceRegister" className='newbtn' >New</Link> */}
            </div>
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
                                <TableCell>Date / Time</TableCell>
                                <TableCell>HSRP</TableCell>
                                <TableCell>Longitude</TableCell>
                                <TableCell>Latitude</TableCell>
                                <TableCell>Acc Type</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Allocation Hosp/Fire</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {json.map(item => (
                                <TableRow key={item.ID}>
                                    <TableCell>{item.ID}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.hsrp}</TableCell>
                                    <TableCell>{item.long}</TableCell>
                                    <TableCell>{item.lat}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.action}</TableCell>
                                    <TableCell>{item.alohosp}</TableCell>
                                    {/* <TableCell>&#xFE19;</TableCell> */}
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
