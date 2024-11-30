import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [tag, setTag] = useState('');
  const navigate = useNavigate();

  const handleSearch = (type) => {
    if (tag.trim()) navigate(`/${type}/${tag}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Clash of Clans Stats</h1>
      <input
        type="text"
        placeholder="Enter Player or Clan Tag (e.g., #1234)"
        className="border border-gray-300 p-2 rounded mb-4"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <div className="space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleSearch('player')}
        >
          Search Player
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => handleSearch('clan')}
        >
          Search Clan
        </button>
      </div>
    </div>
  );
};

export default Home;