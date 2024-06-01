import React from 'react';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <div>
            <b>About</b>
            <hr />
            
            <Typography paragraph>
                The Automatic Vehicle Accident Detection and Alert System using IoT without Internet is a groundbreaking project aimed at revolutionizing road safety and emergency response mechanisms. By harnessing the power of Internet of Things (IoT) technology and LoRa communication protocol, this system offers a sophisticated solution to detect vehicular accidents in real-time and automatically alert emergency services, all without relying on traditional internet connectivity.
            </Typography>
            <Typography paragraph>
                At its core, the system consists of sensor modules integrated into vehicles, which are tasked with detecting collision events and acquiring precise GPS location data. Upon detecting an accident, these sensor modules communicate the incident details to a central base station using LoRa technology. The base station, equipped with advanced algorithms, swiftly processes the incoming data and triggers appropriate actions, such as dispatching emergency responders to the accident location.
            </Typography>
            <Typography paragraph>
                One of the key features of this system is its ability to provide real-time alerts and instructions to vehicle occupants, guiding them on how to access emergency services promptly. By eliminating the dependency on internet connectivity, this system ensures seamless operation in both urban and remote areas, where internet access may be limited or unreliable.
            </Typography>
            <Typography paragraph>
                The ultimate goal of the Automatic Vehicle Accident Detection and Alert System is to significantly reduce response times, minimize casualties, and enhance overall road safety for communities worldwide. Through its innovative approach and integration of cutting-edge technologies, this project strives to make a tangible difference in saving lives and preventing accidents on our roads.
                <br />
                <br />
                Thank You
            </Typography>

        </div>
    );
}

export default About;
