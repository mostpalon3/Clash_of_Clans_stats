import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerStats from './components/PlayerStats';
import ClanStats from './components/ClanStats';

const App = () => (
  <div className="min-h-screen bg-gray-100 p-5">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player/:tag" element={<PlayerStats />} />
      <Route path="/clan/:tag" element={<ClanStats />} />
    </Routes>
  </div>
);

export default App;