import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Link } from "react-router-dom";

export default function User() {
    const [loading, setLoading] = useState(false);
    const [table, setTable] = useState(true);
    const [data, setData] = useState("");
    const [json, setJson] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTable(false);
        axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=getuser')
            .then(res => {
                var persons = res.data;
                var person = persons.replace(/'/g, '"');
                console.log(person);
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
            <Typography variant="h5" >
                Users
            </Typography>
            <div className='headerbar'>
                <Link to="/devicereg" className='newbtn'>New</Link>
            </div>
            <br />
            <br />
            <br />
           
         
            <hr />
            {loading && (
                <div>
                    <div class="loader"></div>
                </div>
            )}
            {table && (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>HSRP Plate No</TableCell>
                            <TableCell>Owner Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {json.map(item => (
                            <TableRow key={item.ID}>
                                <TableCell>{item.ID}</TableCell>
                                <TableCell>{item.Hsrp}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.phone}</TableCell>
                                <TableCell>{item.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
            <Typography variant="body1">{data}</Typography>
        </div>
    )
}
