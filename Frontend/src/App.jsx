import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Demand/Dashboard";

import Leads from "./components/Demand/Leads";
import Pipeline from "./components/Demand/Pipeline";
import Visits from "./components/Demand/Visits";
import Messages from "./components/Demand/Messages";
import Bookings from "./components/Demand/Bookings";
import Analylics from "./components/Demand/Analylics";
import Historical from "./components/Demand/Historical";

import Owners from "./components/Supply/Owners";
import Inventory from "./components/Supply/Inventory";
import Effort from "./components/Supply/Effort";
import Matching from "./components/Supply/Matching";
import Dark from "./components/Supply/Dark";
import Settings from "./components/Supply/Settings";

import Admin from "./components/Admin";
import Availability from "./components/Supply/Availability";
import Links from "./components/Links";

const App = () => {
  return (
    <>
      <Navbar />
<Links/>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard2 />} />
          <Route path="leads" element={<Leads />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="visits" element={<Visits />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="analytics" element={<Analylics />} />
          <Route path="historical" element={<Historical />} />
          <Route path="availability" element={<Availability />} />

          <Route path="owners" element={<Owners />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="effort" element={<Effort />} />
          <Route path="matching" element={<Matching />} />
          <Route path="dark" element={<Dark />} />
          <Route path="settings" element={<Settings />} />

          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;