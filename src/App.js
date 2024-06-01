import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

import Recent from './Components/Recent';
import Hospitals from './Components/Hospitals';
import Fire from './Components/Fire';
import Report from './Components/Report';
import Accidents from './Components/Accidents';
import About from './Components/About';
import Home from './Components/Home';
import AddHospital from './Components/AddHospital';
import AddFire from './Components/AddFire';
import User from './Components/User';
import DeviceReg from './Components/DeviceReg';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="recent" element={<Recent />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="fire" element={<Fire />} />
          <Route path="report" element={<Report />} />
          <Route path="accidents" element={<Accidents />} />
          <Route path="about" element={<About />} />
          <Route path="Add_Hospitals" element={<AddHospital />} />
          <Route path="Add_Fire" element={<AddFire />} />
          <Route path="user" element={<User />} />
          <Route path="devicereg" element={<DeviceReg />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
