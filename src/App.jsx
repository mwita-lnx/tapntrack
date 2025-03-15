// App.js
import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./components/home";
import BlacksmithDashboard from "./components/blacksmith-dashboard";
import FarmMetricsApp from "./components/farm-metrics-react";
import MitumbaDashboard from "./components/mitumba-dashboard";
import KioskDashboard from "./components/kiosk-dashboard";
import WrappItUp from "./components/full-wrapp-it-up";
import SpotifyWrapped from "./components/spotify-backround";



const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blacksmith-dashboard" element={<BlacksmithDashboard/>}/>
          <Route path="/farm-metrics" element={<FarmMetricsApp/>}/>
          <Route path="/mitumba-dashboard" element={<MitumbaDashboard/>}/>
          <Route path="/kiosk-dashboard" element={<KioskDashboard/>}/>
          <Route path="/wrapp-it-up" element={<WrappItUp/>}/>
          <Route path="/spotify-wrapped" element={<SpotifyWrapped/>}/>
          
        </Routes>

      </BrowserRouter>

  );
};

export default App;
