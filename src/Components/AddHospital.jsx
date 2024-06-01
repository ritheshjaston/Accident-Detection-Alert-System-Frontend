import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { TextField, Button, Checkbox, FormControlLabel, Box, CircularProgress } from '@mui/material';

function AddHospital() {
  const [HospitalName, setHospitalName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [longitude, setLongitude] = useState("");
  const [ambulance, setAmbulance] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [Address, setAddress] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(true);

  const handler = (e) => {
    setLoading(true);
    setForm(false);
    axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=RegisterHospital&hname=' + HospitalName + '&email=' + email + '&phone=' + phone + '&address=' + Address +'&ambulanceavl='+ ambulance + '&longitude=' + longitude + '&latitude=' + latitude)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        setLoading(false);
        if ("Hospital Has Been Already Registered To The System" === persons) {
          setData("This Hospital is already registered in the system.");
        } else {
          setData("Thank you for registering.");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
        setData("Please Try again After some time.");
      });

    setHospitalName("");
    setEmail("");
    setName("");
    setPhone("");
    setLongitude("");
    setLatitude("");
    setAmbulance(false);
    setAddress("");
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hospital Registration
      </Typography>
      {form && (
        <>
          <Typography variant="body1" gutterBottom>
            Please fill out this form with the required information
          </Typography>
          <form method='post' id='form'>
            <Box mb={2}>
              <TextField
                label="Hospital Name"
                variant="outlined"
                fullWidth
                required
                value={HospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                required
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
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
              <TextField
                label="Longitude"
                variant="outlined"
                fullWidth
                required
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Latitude"
                variant="outlined"
                fullWidth
                required
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={ambulance}
                    onChange={(e) => setAmbulance(e.target.checked)}
                    name="ambulanceavl"
                    color="primary"
                  />
                }
                label="Ambulance Availability"
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

export default AddHospital;
