import React from 'react';
import Typography from '@mui/material/Typography';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Viewuser.css'
import { Link } from "react-router-dom";

function Hospitals() {
    const [loading, setLoading] = useState(false);
    const [table, settable] = useState(true);
    const [data, setdata] = useState("");
    const [json, setjson] = useState([]);
    useEffect(() => {
        setLoading(true);
        settable(false);
        axios.post('https://script.google.com/macros/s/AKfycby2_3tX1b2igTTTy3r_e4P20Kwcx-JDWPX42btpW5DrJVlphlrOISJ7jUup9hNJTvNrWQ/exec?action=getHospital')
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
                // Handle error here, such as displaying an error message to the user
            });


    }, []);
    return (
        <div>

            <div className='headerbar'>
                <Link to="/Add_Hospitals" className='newbtn' >New</Link>
            </div>
            <br />
            <br />

            <div className="view">
                <hr />
            </div>
            {loading &&
                <>
                    <br />
                    <br />
                    <br />
                    <div class="loader"></div>
                </>
            }

            {table &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Hosp Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Amulance</th>
                            <th scope="col">Location</th>
                            <th scope="col">    </th>
                        </tr>
                    </thead>
                    <tbody>
                        {json.map(item => (
                            <tr key={item.ID}>
                                <td>{item.ID}</td>
                                <td>{item.hname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.Amulance}</td>
                                <td>{item.longitude} / {item.latitude}</td>
                                {/* <td>

                                    <div class="dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            &#xFE19;
                                        </span>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <Link class="dropdown-item" to="">Update</Link>
                                            <Link class="dropdown-item" t0="">Delete</Link>
                                        </div>
                                    </div></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            }

            <h5>{data}</h5>
        </div>
    )
}

export default Hospitals;
