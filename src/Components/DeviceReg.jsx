import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { TextField, Button, Box, CircularProgress } from '@mui/material';

function DeviceReg() {
    const [hsrp, setHsrp] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(true);

    const handler = (e) => {
        setLoading(true);
        setForm(false);
        axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=RegisterDevice&hsrp=' + hsrp + '&name=' + name + '&phone=' + phone + '&email=' + email)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                setLoading(false);
                if ("Device Has Been Already Registered To The System" === persons) {
                    setData("This Device is already registered in the system.");
                } else {
                    setData("Thank you for registering.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
                setData("Please Try again After some time.");
            });

        setHsrp("");
        setEmail("");
        setName("");
        setPhone("");
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Device Registration
            </Typography>
            {form && (
                <>
                    <Typography variant="body1" gutterBottom>
                        Please fill out this form with the required information
                    </Typography>
                    <form method='post' id='form'>
                        <Box mb={2}>
                            <TextField
                                label="Enter Your vehicle HSRP Number"
                                variant="outlined"
                                fullWidth
                                required
                                value={hsrp}
                                onChange={(e) => setHsrp(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                            />
                            <Box mt={2}>
                                <Button variant="contained" color="primary" onClick={handler}>
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </>
            )}
            {loading && (
                <>
                    <br />
                    <br />
                    <br />
                    <CircularProgress />
                    <br />
                    Please Wait...
                </>
            )}
            <Typography variant="h5">{data}</Typography>
        </div>
    );
}

export default DeviceReg;
